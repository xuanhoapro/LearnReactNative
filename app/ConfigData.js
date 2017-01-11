'use strict'

import React from 'react';

var ConfigData = {
  lesson:[{
    key:0,
    title:"Stopwatch",
    component: 'Stopwatch',
    icon: "ios-stopwatch",
    color: "#ff856c",
    hideNav: false,
  },
  {
    key:1,
    title:"Video",
    component: 'VideoPlayer',
    icon: "ios-color-filter",
    color:"#777",
    hideNav: true,
  },
  {
    key:2,
    title:"Weather",
    component: 'Weather',
    icon: "ios-partly-sunny",
    color:"#90bdc1",
    hideNav: true,
  },
  {
    key:3,
    title:"Twitter",
    component: 'Twitter',
    icon: "logo-twitter",
    color:"#2aa2ef",
    hideNav: true,
  },
  // {
  //   key:3,
  //   title:"cocoapods",
  //   component: Day4,
  //   isFA: true,
  //   icon: "contao",
  //   size:50,
  //   color:"#FF9A05",
  //   hideNav: false,
  // },
  // {
  //   key:4,
  //   title:"find my location",
  //   component: Day5,
  //   isFA: false,
  //   icon: "md-pin",
  //   size:50,
  //   color:"#00D204",
  //   hideNav: false,
  // },
  // {
  //   key:5,
  //   title:"Spotify",
  //   component: Day6,
  //   isFA: true,
  //   icon: "spotify",
  //   size:50,
  //   color:"#777",
  //   hideNav: true,
  // },
  // {
  //   key:6,
  //   title:"Moveable Circle",
  //   component: Day7,
  //   isFA: false,
  //   icon: "ios-baseball",
  //   size:50,
  //   color:"#5e2a06",
  //   hideNav: true,
  // },
  // {
  //   key:7,
  //   title:"Swipe Left Menu",
  //   component: Day8,
  //   isFA: true,
  //   icon: "google",
  //   size:50,
  //   color:"#4285f4",
  //   hideNav: true,
  // },
  // {
  //   key:8,
  //   title:"Twitter Parallax View",
  //   component: Day9,
  //   isFA: true,
  //   icon: "twitter-square",
  //   size:50,
  //   color:"#2aa2ef",
  //   hideNav: true,
  // },
  // {
  //   key:9,
  //   title:"Tumblr Menu",
  //   component: Day10,
  //   isFA: false,
  //   icon: "logo-tumblr",
  //   size:50,
  //   color:"#37465c",
  //   hideNav: true,
  // },
  // {
  //   key:10,
  //   title:"OpenGL",
  //   component: Day11,
  //   isFA: false,
  //   icon: "md-contrast",
  //   size:50,
  //   color:"#2F3600",
  //   hideNav: false,
  // },
  // {
  //   key:11,
  //   title:"charts",
  //   component: Day12,
  //   isFA: false,
  //   icon: "ios-stats",
  //   size:50,
  //   color:"#fd8f9d",
  //   hideNav: false,
  // },
  // {
  //   key:12,
  //   title:"tweet",
  //   component: Day13,
  //   isFA: false,
  //   icon: "md-chatboxes",
  //   size:50,
  //   color:"#83709d",
  //   hideNav: true,
  // },
  // {
  //   key:13,
  //   title:"tinder",
  //   component: Day14,
  //   isFA: true,
  //   icon: "fire",
  //   size:50,
  //   color:"#ff6b6b",
  //   hideNav: true,
  // },
  // {
  //   key:14,
  //   title:"Time picker",
  //   component: Day15,
  //   isFA: false,
  //   icon: "ios-calendar-outline",
  //   size:50,
  //   color:"#ec240e",
  //   hideNav: false,
  // },
  // {
  //   key:15,
  //   title:"Gesture unlock",
  //   component: Day16,
  //   isFA: false,
  //   icon: "ios-unlock",
  //   size:50,
  //   color:"#32A69B",
  //   hideNav: true,
  // },
  // {
  //   key:16,
  //   title:"Fuzzy search",
  //   component: Day17,
  //   isFA: false,
  //   icon: "md-search",
  //   size:50,
  //   color:"#69B32A",
  //   hideNav: false,
  // },
  // {
  //   key:17,
  //   title:"Sortable",
  //   component: Day18,
  //   isFA: false,
  //   icon: "md-move",
  //   size:50,
  //   color:"#68231A",
  //   hideNav: true,
  // },
  // {
  //   key:18,
  //   title:"TouchID to unlock",
  //   component: Day19,
  //   isFA: false,
  //   icon: "ios-log-in",
  //   size:50,
  //   color:"#fdbded",
  //   hideNav: true,
  // },
  // {
  //   key:19,
  //   title:"Single page Reminder",
  //   component: Day20,
  //   isFA: false,
  //   icon: "ios-list-outline",
  //   size:50,
  //   color:"#68d746",
  //   hideNav: true,
  // },
  // {
  //   key:20,
  //   title:"Multi page Reminder",
  //   component: Day21,
  //   isFA: false,
  //   icon: "ios-paper-outline",
  //   size:50,
  //   color:"#fe952b",
  //   hideNav: true,
  // },
  // {
  //   key:21,
  //   title:"Google Now",
  //   component: Day22,
  //   isFA: false,
  //   icon: "ios-mic-outline",
  //   size:50,
  //   color:"#4285f4",
  //   hideNav: true,
  // },
  // {
  //   key:22,
  //   title:"Local WebView",
  //   component: Day23,
  //   isFA: true,
  //   icon: "safari",
  //   size:50,
  //   color:"#23bfe7",
  //   hideNav: false,
  // },
  // {
  //   key:23,
  //   title:"Youtube scrollable tab",
  //   component: Day24,
  //   isFA: false,
  //   icon: "logo-youtube",
  //   size:50,
  //   color:"#e32524",
  //   hideNav: true,
  // },
  // {
  //   key:24,
  //   title:"custome in-app browser",
  //   component: Day25,
  //   isFA: false,
  //   icon: "ios-globe",
  //   size:50,
  //   color:"#00ab6b",
  //   hideNav: true,
  // },
  // {
  //   key:25,
  //   title:"swipe and switch",
  //   component: Day26,
  //   isFA: false,
  //   icon: "md-shuffle",
  //   size:50,
  //   color:"#893D54",
  //   hideNav: true,
  // },
  // {
  //   key:26,
  //   title:"iMessage Gradient",
  //   component: Day27,
  //   isFA: false,
  //   icon: "ios-chatbubbles",
  //   size:50,
  //   color:"#248ef5",
  //   hideNav: false,
  // },
  // {
  //   key:27,
  //   title:"iMessage image picker",
  //   component: Day28,
  //   isFA: false,
  //   icon: "md-images",
  //   size:50,
  //   color:"#f5248e",
  //   hideNav: true,
  // },
  // {
  //   key:28,
  //   title:"3d touch",
  //   component: Day29,
  //   isFA: false,
  //   icon: "ios-navigate",
  //   size:50,
  //   color:"#48f52e",
  //   hideNav: false,
  // },
  // {
  //   key:29,
  //   title:"Push Notifications",
  //   component: Day30,
  //   isFA: false,
  //   icon: "md-notifications",
  //   size:50,
  //   color:"#f27405",
  //   hideNav: false,
  // }
  ]
};

export default ConfigData;
