import { Col, Row } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Sidebar from "../../components/Sidebar";
import ChatArea from "./ChatArea";
import styled from 'styled-components'

function Room() {
    const RoomStyled = styled.div`
      color: #B68A99;
      //max-height: 2000px;
      position:fixed;
      width: 100%;
      height: 100%;
      background: #F2E8CE;
      input, select, textarea{
        color: #B68A99;
        
    }
    button{
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
        border:none;
    }
    `
    return (
        <div>
            <RoomStyled>
            <Row style ={{'height': '100%'}}>
                    <Col flex = "300px"><Sidebar/></Col>
                    <Col  flex="auto"><ChatArea/></Col>
            </Row>
            </RoomStyled>
        </div>


    );
}

export default Room;
