import { useState } from 'react'
import Chatbot from './components/Chatbot'
import {Route, Routes} from 'react-router-dom';
import './index.css';
import { Login } from './components/Login';

function App() {
  const [login, setLogin] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<Chatbot />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
