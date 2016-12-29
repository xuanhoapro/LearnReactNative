'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
   Container, Header, Title, Content, Footer, FooterTab, Button, Icon, View,
   Text, List, ListItem
} from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class Stopwatch extends Component {
  constructor(props){
    super(props);
    // console.log(this.props.dataLesson);
  }

  render() {
    var data = this.props.dataLesson;
    return (
      <Container>
        <Header>
          <Button transparent onPress={Actions.pop}>
              <Icon name='ios-arrow-back' /> Back
          </Button>
          <Title>{data.title}</Title>
        </Header>
        <Content>
          <WatchResult totalTime="00:00:00.00"/>
        </Content>
    </Container>
    );
  }
}

class WatchResult extends Component {
  render() {
    return (
      <View style={styles.blockTime}>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    );
  }
}

class WatchControl extends Component {
  render() {
    return (
      <View style={styles.blockWatchControl}>
        <View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  blockTime: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  totalTime: {
    fontSize: 20
  },
  blockWatchControl: {

  },

});
