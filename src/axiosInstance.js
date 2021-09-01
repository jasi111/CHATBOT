import axios from "axios";

export default axios.create ({
    baseURL: "https://chat-bot-e52b7-default-rtdb.firebaseio.com/"
})