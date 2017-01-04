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
    this.state = {
      totalTime: "00:00.00",
      recordCounter: 0,
      record: [
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""}
      ]

    };

    this.running = false;
    this.times = [ 0, 0, 0];
    this.running = false;
  }

  _startWatch() {
    if (!this.time) this.time = (new Date()).getTime();
    if (!this.running) {
        this.running = true;
        setInterval(this.__step.bind(this));
        // setImmediate(this.__step.bind(this));

    }
  }

  __step(timestamp) {
    timestamp = (new Date()).getTime();
    if (!this.running) return;
    this.__calculate(timestamp);
    this.time = timestamp;
    this.__assignTimer();
    // setImmediate(this.__step.bind(this));
  }
  __calculate(timestamp) {
    var diff = timestamp - this.time;
    // Hundredths of a second are 100 ms
    this.times[2] += diff / 10;
    // Seconds are 100 hundredths of a second
    if (this.times[2] >= 100) {
        this.times[1] += 1;
        this.times[2] -= 100;
    }
    // Minutes are 60 seconds
    if (this.times[1] >= 60) {
        this.times[0] += 1;
        this.times[1] -= 60;
    }
  }
  __assignTimer(){
    let timing = this.__format(this.times);
    this.setState({
      totalTime: timing
    });
  }
  __format(times) {
    return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}.\
${pad0(Math.floor(times[2]), 2)}`;
  }

  _addLap() {
    let {recordCounter, record} = this.state;
    recordCounter++;
    record.unshift({title:"Lap "+recordCounter, time: 'AAA'});

    if (recordCounter < record.length) {
      record.pop();
    }
    this.setState({
      recordCounter: recordCounter,
      record: record
    })
  }

  _resetLap() {
    this.setState({
      recordCounter: 0,
      record: [
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""},
        {title:"", time:""}
      ]
    })
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
          <WatchResult totalTime={this.state.totalTime} />
          <WatchControl addLapFunc={()=> this._addLap()}
            resetLapFunc={()=> this._resetLap()}
            startWatchFunc={()=>this._startWatch()}
          />
          <WatchRecord record={this.state.record}/>
        </Content>
    </Container>
    );
  }
}

class WatchResult extends Component {
  static propTypes = {
    totalTime: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <View style={styles.blockTime}>
        <H1>{this.props.totalTime}</H1>
      </View>
    );
  }
}

class WatchControl extends Component {
  static propTypes = {
    addLapFunc: React.PropTypes.func.isRequired,
    resetLapFunc: React.PropTypes.func.isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      disabledBtnEnd: true,
      isStopWatch: false,
      textBtnEnd: 'Lap',
      textBtnStart: 'Start'
    };
  }
  _startWatch(){
    if (this.state.isStopWatch) { // Click button Stop
      this.setState({
        textBtnStart: 'Start',
        textBtnEnd: 'Reset',
        isStopWatch: false,
      });
    }else{
      this.setState({ // Click button Start
        textBtnStart: 'Stop',
        textBtnEnd: 'Lap',
        disabledBtnEnd: false,
        isStopWatch: true,
      });
      this.props.startWatchFunc();
    }
  }

  _addLap(){
    if (this.state.isStopWatch) { // click button Lap
      this.props.addLapFunc();
    } else { // Click add Reset
      this.props.resetLapFunc();
      this.setState({
        isStopWatch: false,
        textBtnStart: 'Start',
        textBtnEnd: 'Lap',
        disabledBtnEnd: true,
      });

    }
  }

  render() {
    return (
      <View>
        <Grid>
          <Col>
            <Row style={watchControl.rowBtn}>
              <Button rounded bordered
              disabled={this.state.disabledBtnEnd}
              style={watchControl.btnEnd} onPress={()=>this._addLap()}>
                {this.state.textBtnEnd}
              </Button>
            </Row>
          </Col>
          <Col>
            <Row style={watchControl.rowBtn}>
              <Button rounded bordered
              success={this.state.isStopWatch ? false : true}
              danger={this.state.isStopWatch ? true : false}
              style={watchControl.btnStart} onPress={()=>this._startWatch()}>
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
    static propTypes = {
        record: React.PropTypes.array.isRequired,
    };

  render() {
    return (
      <View style={{marginTop: 10}}>
        <List dataArray={this.props.record}
          renderRow={(record) => {
            return (
              <ListItem>
                <Text style={{textAlign: 'left', flex: 1}}>{record.title}</Text>
                <Text style={{textAlign: 'right', flex: 1}}>{record.time}</Text>
              </ListItem>
            )
          }}>
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

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}
