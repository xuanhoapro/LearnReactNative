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

export default class Twitter extends Component {
  constructor(props){
    super(props);
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
          <Text>
            Hello world!
          </Text>
        </Content>
    </Container>
    );
  }
}
