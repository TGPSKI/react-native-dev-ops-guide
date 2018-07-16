/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Config from 'react-native-config';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ENV VARS</Text>
        <Text style={styles.instructions}>
          API_KEY: {Config.API_KEY ? Config.API_KEY : 'undefined'}
        </Text>
        <Text style={styles.instructions}>
          ANOTHER_CONFIG: {Config.ANOTHER_CONFIG ? Config.ANOTHER_CONFIG : 'undefined'}
        </Text>
        <Text style={styles.instructions}>
          API_URI: {Config.ANOTHER_CONFIG ? Config.API_URI : 'undefined'}
        </Text>
        <Text style={styles.instructions}>
          WWW_URI: {Config.WWW_URI ? Config.WWW_URI : 'undefined'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
