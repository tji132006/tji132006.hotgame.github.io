import React from 'react';
import 'whatwg-fetch';
import {Row, Col} from 'antd';

export class EventsDetails extends React.Component{

    constructor(){
        super();
        this.state = {
            details: '',
        }
    }

    componentWillMount(){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.smarkets.com/v3/events/?states=upcoming&ids="

        var myFetchOptions ={
            method: 'GET',
        };
      //fetching specific data from Smarkets API by query id
      fetch(proxyUrl + url + this.props.match.params.id, myFetchOptions)
            .then(response => response.json())
            .then(json => {this.setState({details: json})});
    }

    render(){
        const {details} = this.state;

        const soccerList = Object.keys(details).length
            ? details.events.map((item, index)=>(
                <li key={index}>
                    <p>Game: {item.name}</p>
                    <p>Start Time: {item.start_datetime}</p>
                </li>
            ))
            :'Loading...';

        return(
            <div className="list">
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="container">
                        <div>
                            <ul>
                                {soccerList}
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}
