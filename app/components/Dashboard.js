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
    return this.state.lesson.map(function(data, index) {
      return(
        <Col style={styles.colLesson}>
          <Button transparent block style={styles.itemLesson} onPress={()=>{
            var actionName = Actions[data.component];
            return actionName({dataLesson: data});
          }}>
            <Icon name={data.icon} style={[{color:data.color}]}/>
            {data.title}
          </Button>
        </Col>
      );
    });
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
          <Grid>
            <Row>{dataLesson}</Row>
          </Grid>
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
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },
});
