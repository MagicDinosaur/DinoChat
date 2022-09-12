import React from 'react';
import styled from "styled-components";
import {Button, Avatar, Col, Row,Tooltip} from "antd";
function ChatAreaMainBar(props) {
    const ChatAreaMainBarStyled =  styled.div`
      background: #F2E8CE;
      width: 100%;
      padding: 10px 27px 10px 27px;
      border-bottom: 0.5px solid;
      .ChattingUser{
        width: 100%;
        display: flex;
        margin-top:10px;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
      }
      i {
        margin-top: 18px;
        margin-left: auto;
        float:right;
      }
      p{
        padding-left: 15px;
        margin-top: 8px;
      }
    `
    return (

        <div>
        <ChatAreaMainBarStyled>
            <Row>
                <div className="ChattingUser">
              <Avatar size={60} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                {/*<Col span={23}>*/}

                    <p> Chatting User</p>
                    <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
                </div>
                {/*</Col>*/}



            </Row>
        </ChatAreaMainBarStyled>
        </div>
    );
}

export default ChatAreaMainBar;
