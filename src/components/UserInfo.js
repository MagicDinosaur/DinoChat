import React from 'react';
import {Button, Avatar, Col, Row,Tooltip} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components'
function UserInfo(props) {

    const UserInfoStyled = styled.div`
      display: flex;
      padding: 12px;
      border-bottom: 1px solid;

      .username {
        width: 100%;
        margin-left: 10px;
        text-align: center;
        font-size: 20px;
      }

      .Button {
        margin-left: auto;
        margin-right: 0;
        width: 50px;
      }

      .userstatus {
        font-size: 12px;
      }

      input {
        width: 100%;
        margin-top: 7px;
        border-radius: 14px;
      }

      input::placeholder {
        font-size: smaller;
        text-align: center;
      }
    `

    return (
        <UserInfoStyled>
            {/*<Avatar src= "https://cdn.dribbble.com/users/1044993/screenshots/6634466/triceratops_dribbble.png?compress=1&resize=400x300" size={54}></Avatar>*/}
            <div className ="username">
                <h2 style ={{marginBottom:'0px',color:'#B68A99' }} ><b> Dinochat </b></h2>
              {/*<p className="userstatus"> Click me to log out  </p>*/}
                <input type="text" placeholder="Search users"></input>
            </div>
            <div className= "newchat">

            </div>
            {/*<Col flex="auto"><Button type="primary" shape="round">Log Out </Button></Col>*/}

        </UserInfoStyled>
    );
}

export default UserInfo;

