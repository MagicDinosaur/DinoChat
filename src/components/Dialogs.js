import React from 'react';
import {Row, Col, Avatar} from "antd";
import styled from 'styled-components'
function Dialogs(props) {
    const DialogsStyled = styled.div`

      .friendList {
        //padding: 5px 20px;

      }

      .friendChat {
        padding: 10px 0px 10px 15px;
        //padding-bottom: 10px;
        //padding-left: 7px;
        width: 100%;
      }

      .friendChat:hover {
        background-color: #d4d5c6;
        transition-duration: .5s;
      }

      .userName {
        font-size: 19px;
        color: #B68A99;
        font-weight: bold;
        margin-bottom: 0px;
      }
    `


    return (
        <DialogsStyled>
            <div className="friendList">
                <Row className="friendChat" >
                  <Col>
                      <Avatar size={67} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                  </Col>
                    <Col style={{'margin-left':'10px','color': '#B68A99'}}>
                            <p className="userName" >User 1</p>
                            <p >No messages</p>
                    </Col>
                </Row>
                <Row className="friendChat" >
                    <Col>
                        <Avatar size={67} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                    </Col>
                    <Col style={{'margin-left':'10px','color': '#B68A99'}}>
                        <p className="userName" >User 1</p>
                        <p >No messages</p>
                    </Col>
                </Row>
                <Row  className="friendChat" style ={{'margin-top' : '5px'}}>
                    <Col>
                        <Avatar size={67} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                    </Col>
                    <Col style={{'margin-left':'10px','color': '#B68A99'}}>
                        <p className="userName" >User 1</p>
                        <p >No messages</p>
                    </Col>
                </Row>
                <Row  className="friendChat" style ={{'margin-top' : '5px'}}>
                    <Col>
                        <Avatar size={67} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                    </Col>
                    <Col style={{'margin-left':'10px','color': '#B68A99'}}>
                        <p className="userName" >User 1</p>
                        <p >No messages</p>
                    </Col>
                </Row>
                <Row  className="friendChat" style ={{'margin-top' : '5px'}}>
                    <Col>
                        <Avatar size={67} src= "https://ih1.redbubble.net/image.362317170.4069/st,small,507x507-pad,600x600,f8f8f8.jpg" ></Avatar>
                    </Col>
                    <Col style={{'margin-left':'10px','color': '#B68A99'}}>
                        <p className="userName" >User 1</p>
                        <p >No messages</p>
                    </Col>
                </Row>


            </div>
        </DialogsStyled>
    );
}

export default Dialogs;

