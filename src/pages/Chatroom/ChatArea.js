import React from 'react';
import ChatAreaMainBar from "./ChatAreaMainBar";
import SendChatBar from "./SendChatBar";

function ChatArea() {
    return (
        <>
        <div><ChatAreaMainBar/></div>
        <div style={{color:"black"}}>
            <h1> No message recently. Start chatting now. </h1>
        </div>
        <div><SendChatBar/></div>
        </>
    );
}

export default ChatArea;
