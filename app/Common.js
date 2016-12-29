'use strict'

import React from 'react';
import Dimensions from 'Dimensions';
var Common = {
  sizeScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  submitPost(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      callback(responseData);
    });
  },
};

export default Common;
