import React from 'react';
import {Col, Row} from "antd";
import ChatArea from "../pages/Chatroom/ChatArea";
import UserInfo from "./UserInfo";
import Dialogs from "./Dialogs";
import styled from 'styled-components'
function Sidebar() {
    const SidebarStyled = styled.div`
      background: #F2E8CE;
      color: #B68A99;
      
    `
    
    return (

        <SidebarStyled>
            <Row>
                <Col span={24}> <UserInfo/></Col>
                <Col span={24}> <Dialogs/></Col>
            </Row>


        </SidebarStyled>
    );
}

export default Sidebar;
