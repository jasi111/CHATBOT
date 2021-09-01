import React from 'react';
import ChatScreen from '../chatbot/ChatScreen';
// import "./home.css";
import "./style.css";

function Home() {
    return (
        <div className="home">

            <div className="imgColumn">
                {/* <h1>Chat Bot</h1> */}
                <img src="herowhite.svg" className="heroImage" />

            </div>

            <div className="column chatColumn mobileChat">
                <div className="chatComponent">
                <ChatScreen />
                </div>
            </div>
        </div>
    )
}

export default Home
