import React, { Component } from 'react';
import List from './components/list.react';
import Styles from './styles/main';
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class RadioNative extends Component {
  constructor() {
    super();
    this.state = {
      test: require('./img/play0.png'),
    };
  }

  _handleClick() {
    this.setState({ test: require('./img/play.png') });
  }

  render() {
    return (
      <View style={Styles.mainView}>
      <View>
        <Image source={require('./img/cover.jpg')} style={Styles.image} />
        <Text onPress={() => this._loginBtnClick()}>Hello</Text>
        <TouchableHighlight onPress={this._handleClick.bind(this)}
          underlayColor="#CA5D3E">
          <Image source={this.state.test} style={Styles.playButton}/>
        </TouchableHighlight>
        <List/>
      </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('RadioNative', () => RadioNative);
