import React from 'react';
import { Row, Col } from 'antd';

import logo from '../assets/images/sports.png';

export class EventHeader extends React.Component{
    render(){
        return(
            <header>
                <Row>
                    <Col span={4}></Col>
                    <Col span={4}>
                        <a href = "/" className= "logo">
                            <img src={logo} alt="logo"/>
                            <span>Hot Games</span>
                        </a>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={4}></Col>
                </Row>
            </header>
        );
    }
}