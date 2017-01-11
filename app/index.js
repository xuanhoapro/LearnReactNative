'use strict'

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Dashboard from './components/Dashboard.js';
import Stopwatch from './components/Stopwatch.js';
import Weather from './components/Weather.js';
import VideoPlayer from './components/VideoPlayer.js';
import Twitter from './components/Twitter.js';

export default class Index extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Dashboard" component={Dashboard} initial={true} hideNavBar={true}/>
          <Scene key="Stopwatch" component={Stopwatch} hideNavBar={true}/>
          <Scene key="Weather" component={Weather} hideNavBar={true}/>
          <Scene key="VideoPlayer" component={VideoPlayer} hideNavBar={true}/>
          <Scene key="Twitter" component={Twitter} hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}
