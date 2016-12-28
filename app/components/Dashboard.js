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

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
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
            <Row>
              <Col style={{ backgroundColor: '#D954D7'}}>
                <Text>AAA</Text>
              </Col>
              <Col style={{ backgroundColor: '#D93735'}}>
                <Text>AAA</Text>
              </Col>
              <Col style={{ backgroundColor: '#D954D7'}}>
                <Text>AAA</Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: '#D954D7'}}>
                <Text>BBB</Text>
              </Col>
              <Col style={{ backgroundColor: '#D93735'}}>
                <Text>BBB</Text>
              </Col>
              <Col style={{ backgroundColor: '#D954D7'}}>
                <Text>BBB</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
    </Container>
    );
  }
}
