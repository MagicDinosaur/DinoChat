import React from 'react';
import styled from 'styled-components';
function SendChatBar(props) {
    const SendChatBarStyled = styled.div`
      height: 50px;
      width: 100%;
      background: #F2E8CE;
      position: fixed;
      bottom: 0;
      border-top: 0.5px solid;
      display: flex;
      padding: 0px 22px 0px 22px;
      
      .MessageInput{
        width: 60%;
      
        border-radius: 20px;
        background: #e4d9bf;
        display: flex;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none !important; 

      }
      input[type=text]{
        color: #b0a5a5;
        font-size: 20px;
        padding-left: 10px;
      }
      fa-solid fa-face-smile fa-lg{
        font-size: 100px;
      }
 
      .chat-button{
        font-size: 20px;
        background-color:transparent;
        outline:none;
        padding-right: 10px;
      }
      .chat-button sending-button{
        // float: right;
        fomt-size: 202px;
      }

      input::placeholder{
        font-size: 20px;
        color: #b0a5a5;
      }
      
    `
    return (
  
        <div>
<i class="fa-solid fa-paper-plane fa-lg"></i>

            <SendChatBarStyled>
       
    
            <button className="chat-button">
                <i className="fa-solid fa-image"></i>
                </button>
                <button className="chat-button">
                <i className="fa-regular fa-file"></i>
                </button>
          
                <button className="chat-button">
                <i class="fa-solid fa-film"></i>
                </button>
              <div className="MessageInput">
                <input type="text" placeholder="Type a message...">
                </input>

              <button className="chat-button">
                <i className="fa-solid fa-face-smile fa-lg"></i>
                </button>
                </div>
                <button className="chat-button sending-button">
                <i class="fa-solid fa-paper-plane fa-lg"></i>
                </button>
                


            </SendChatBarStyled>

        </div>
    );
}

export default SendChatBar;
