'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
   Container, Header, Title, Content, Footer, FooterTab, Button, Icon, View,
   Text, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import ConfigData from './../ConfigData.js'

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      lesson: ConfigData.lesson
    }
  };

  _blockLesson(){
    let arrColData = [];
    let arrRowData = [];
    let countLesson = this.state.lesson.length;

    this.state.lesson.map(function(data, index) {
      let number  = index+1;
      let colData = <Col style={styles.colLesson}>
          <Button transparent block style={styles.itemLesson} onPress={()=>{
            var actionName = Actions[data.component];
            return actionName({dataLesson: data});
          }}>
            <Icon name={data.icon} style={[{color:data.color}]}/>
            <Text>{data.title}</Text>
          </Button>
        </Col>

      arrColData.push(colData);
      if (number%3==0) {
        arrRowData.push(<Row>{arrColData}</Row>);
        arrColData = [];
      } else if (number==countLesson) {
        for (let i = 0; i < (3-number%3); i++) {
            arrColData.push(<Col></Col>);
        }
        arrRowData.push(<Row>{arrColData}</Row>);
        arrColData = [];
      }
    });

    return(<Grid>{arrRowData}</Grid>);
  };

  render() {
    var dataLesson = this._blockLesson();
    return (
      <Container>
        <Header>
          <Button transparent>
              <Icon name='ios-menu' />
          </Button>
          <Title>Dashboard</Title>
        </Header>

        <Content>
          {dataLesson}
        </Content>
    </Container>
    );
  };

}

var styles = StyleSheet.create({
  colLesson: {
    borderRightWidth: 1,
    borderRightColor: '#cccccc',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemLesson:{
    flex: 1,
    borderRadius: 0,
  },
});
