'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
   Container, Header, Title, Content, Footer, FooterTab, Button, Icon, View,
   Text, List, ListItem, H1
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';


export default class VideoPlayer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var data = this.props.dataLesson;
    return (
      <View style={styles.container}>
          <Video
            source={{uri: "moments"}}
            style={styles.backgroundFixed}
            muted={true}
            resizeMode='cover'
            repeat={true}
          />
          <View style={styles.mainContent}>
            <View style={styles.btnControl}>
              <Button info style={[styles.btnBack]} onPress={Actions.pop}>
                <Icon name='ios-arrow-back' style={{color: '#FFFFFF'}} />
                <Text style={{color: '#FFFFFF'}}>Back</Text>
              </Button>
            </View>
            <View style={styles.logoContainer}>
              <Icon name="ios-color-filter" style={styles.logoIcon}/>
              <H1 style={styles.logoText}>
                HoaNguyen
              </H1>
            </View>
            <View style={styles.btnFooter}>
              <Button success style={[styles.btn]}>Login</Button>
              <Button warning style={[styles.btn]}>Register</Button>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundFixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

  },
  mainContent: {
    backgroundColor: 'rgba(242,87,87,0.3)',
    flex: 1,
  },
  btnControl: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnBack: {
    width: 100,
    borderRadius: 0,
    backgroundColor: 'transparent'
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    color: '#FFFFFF',
  },
  logoIcon: {
    color: '#FFFFFF',
    fontSize: 60
  },
  btnFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: "row"
  },
  btn:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 0
  },
});
