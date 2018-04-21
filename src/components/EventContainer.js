import React from 'react';
import {Row, Col} from 'antd';
import {Tabs} from 'antd';
import {EventBlock} from "./EventBlock"


const TabPane = Tabs.TabPane;

export class EventContainer extends React.Component{
    render(){
        return(
          <div className="tab">
              <Row>
                  <Col span={6}></Col>
                  <Col span={12}>
                      <Tabs>
                          <TabPane tab="Soccer" key="1">
                              <EventBlock limit={10} types="football_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Basketball" key="2">
                              <EventBlock limit={10} types="basketball_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Snooker" key="3">
                              <EventBlock limit={10} types="snooker_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Horse Racing" key="4">
                              <EventBlock limit={10} types="horse_racing_race" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Boxing" key="5">
                              <EventBlock limit={10} types="boxing_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Baseball" key="6">
                              <EventBlock limit={10} types="baseball_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Tennis" key="7">
                              <EventBlock limit={10} types="tennis_match" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Ice Hockey" key="8">
                              <EventBlock limit={10} types="ice_hockey_match" width="100%" bordered="false"/>
                          </TabPane>
                      </Tabs>
                  </Col>
                  <Col span={6}></Col>
              </Row>
          </div>
        );
    }
}