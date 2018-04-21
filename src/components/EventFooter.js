import React from 'react';
import { Row, Col } from 'antd';

export class EventFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2018 Hot Games. All Rights Reserved
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}