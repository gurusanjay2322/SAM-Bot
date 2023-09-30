import React, { useEffect } from "react";
import { useState } from "react";
import { Loading } from "./Loading";
import "../index.css";
import logout from "/log-out.png";

const Chatbot = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return <div id='webchat'>{loading ? <Loading /> : <BotFrame />}</div>;
};

const BotFrame = () => {
  const [user, setUser] = useState(null);

  const updateInputBox = (string) => {
    const textArea = document.getElementById('input-message');
    console.log(textArea);
  }

  const getUserDetails = async () => {
    const response = await fetch('http://localhost:3000/user',  {
      method : 'GET',
      credentials : 'include'
    });
    const data = await response.json();
    setUser({
      name : data.displayName,
      profile : data.photos[0].value
    })
    updateInputBox(data.user);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className='absolute inset-4 '>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2%",
        }}>
        <a
          href='http://localhost:3000/logout'
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color : 'grey'
          }}>
          <img
            src={logout}
            alt='logout'
            height={25}
            style={{ marginRight: "4%" }}
          />
          <h3>Logout</h3>
        </a>
        {user && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              width: "60%",
            }}>
            <h4 style={{ margin: "0 2%", color : 'grey' }}>{user.name}</h4>
            <img
              src={user.profile}
              alt='user-profile'
              width={35}
              height={35}
              style={{ borderRadius: "100%" }}
            />
          </div>
        )}
      </div>
      <div className='center-div'>
        <iframe
          style={{ border: "none" }}
          srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'Substation Enhancement Catalyst',
                  'botName': 'Prompt Ed',
                  'botId': '7e740d1b-1fb2-4957-ba88-74c121b09fc3',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '7e740d1b-1fb2-4957-ba88-74c121b09fc3',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'classNameName': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
          width='100%'
          height='100%'></iframe>
      </div>
    </div>
  );
};

export default Chatbot;
