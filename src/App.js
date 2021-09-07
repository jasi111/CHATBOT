import React from "react"
// import './App.css';
// import ChatForm from './components/chatbot/ChatForm';
// import ChatScreen from './components/chatbot/ChatScreen';
import Home from './components/home/home';
import Navbar from './components/Navbar/Navbar';
import Loading from "./Loading/Loading";





function App() {
  

  return (
    <div>
{/* <Loading/> */}
    <Navbar/>
     <Home></Home>     
    </div>
  );
}

export default App;
