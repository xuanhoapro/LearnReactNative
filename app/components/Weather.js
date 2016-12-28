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

export default class Weather extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>
            Hello world!
          </Text>
        </Content>
    </Container>
    );
  }
}
