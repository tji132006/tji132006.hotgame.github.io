import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {EventHeader} from "./EventHeader"
import {EventFooter} from "./EventFooter"
import {EventContainer} from "./EventContainer"
import {EventsDetails} from "./EventsDetails"

class App extends Component {
  render() {
      return(
          <div className="App">
              <EventHeader/>

              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={EventContainer}></Route>
                      <Route path="/details/:id" component={EventsDetails}></Route>
                  </Switch>
              </BrowserRouter>

              <EventFooter/>
          </div>
      );
  }
}

export default App;
