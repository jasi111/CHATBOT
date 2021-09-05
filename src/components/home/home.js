import React from 'react';
import ChatScreen from '../chatbot/ChatScreen';
import "./home.css";

function Home() {
    return (
        <div className="home">

<div className="chatColumn mobileChat">
                <ChatScreen />
            </div>

            <div className="imgColumn">
              
                <img src="heroImage.svg" width="60%" className="heroImage" />

            </div>

            
        </div>
    )
}

export default Home
