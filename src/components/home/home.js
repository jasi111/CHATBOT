import React from 'react';
import ChatScreen from '../chatbot/ChatScreen';
// import "./home.css";
import "./styles.css";

function Home() {
    return (
        <div className="home">

<div className="chatColumn mobileChat">
                <ChatScreen />
            </div>

            <div className="imgColumn">
              
                <img src="herowhite.svg" width="60%" className="heroImage" />

            </div>

            
        </div>
    )
}

export default Home
