'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
   Container, Header, Title, Content, Footer, FooterTab, Button, Icon, View, H1,
   Text, List, ListItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

export default class Stopwatch extends Component {
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
          <WatchResult totalTime="00:00:00.00"/>
          <WatchControl />
          <WatchRecord />
        </Content>
    </Container>
    );
  }
}

class WatchResult extends Component {
  render() {
    return (
      <View style={styles.blockTime}>
        <H1>{this.props.totalTime}</H1>
      </View>
    );
  }
}

class WatchControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabledBtnEnd: true,
      startWatch: false,
      textBtnEnd: 'Lap',
      textBtnStart: 'Start'
    };
  }
  _startWatch(){
    if (this.state.startWatch) {
      this.setState({
        textBtnStart: 'Start',
        disabledBtnEnd: true,
        startWatch: false,
      });
    }else{
      this.setState({
        textBtnStart: 'Stop',
        disabledBtnEnd: false,
        startWatch: true,
      });
    }
  }

  _addLap(){

  }

  render() {
    return (
      <View>
        <Grid>
          <Col>
            <Row style={watchControl.rowBtn}>
              <Button rounded bordered disabled={this.state.disabledBtnEnd} style={watchControl.btnEnd} onPress={()=>this._addLap()}>
                {this.state.textBtnEnd}
              </Button>
            </Row>
          </Col>
          <Col>
            <Row style={watchControl.rowBtn}>
              <Button rounded bordered success style={watchControl.btnStart} onPress={()=>this._startWatch()}>
                {this.state.textBtnStart}
              </Button>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

class WatchRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: [
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""}
      ]
    };
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <List dataArray={this.state.record}
          renderRow={(record) => {
            return (
              <ListItem>
                <Text style={{textAlign: 'left', flex: 1}}>{record.title}</Text>
                <Text style={{textAlign: 'right', flex: 1}}>{record.time}</Text>
              </ListItem>
            )
          }
          }>
        </List>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  blockTime: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40
  }
});

var watchControl = StyleSheet.create({
  rowBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnEnd: {
    width: 70,
    height: 70,
  },
  btnStart: {
    width: 70,
    height: 70,
  }
});
