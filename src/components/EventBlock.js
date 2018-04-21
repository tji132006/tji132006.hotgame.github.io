import React from 'react';
import 'whatwg-fetch';
import {Card} from 'antd';
import { Link } from 'react-router-dom';

export class EventBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            soccer: '',
        }
    }

    componentWillMount(){
        //proxy url for cors
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.smarkets.com/v3/events/?states=upcoming&types="

        var myFetchOptions ={
            method: 'GET',
        };
        //fetching data from Smarkets API
        fetch(proxyUrl + url +this.props.types+"&sort=id&limit=" + this.props.limit, myFetchOptions)
            .then(response => response.json())
            .then(json => {this.setState({soccer: json})});
    }

    render(){
        const {soccer} = this.state;

        console.log(soccer.events);
        const soccerList = Object.keys(soccer).length
            ? soccer.events.map((soccerItem, index)=>(
                <li key={index}>
                    <Link to={`details/${soccerItem.id}`} target="_blank">
                        {soccerItem.name}
                        {console.log(soccerItem.id)}
                    </Link>
                </li>

            ))
            :'Loading...';

        return(
          <div>
              <Card>
                  <ul>
                      {soccerList}
                  </ul>
              </Card>
          </div>
        );
    }
}
