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
  constructor(props) {
    super(props);
    this.state = {
      test: require('./img/Play_btn.png'),
    };
  }

  _handleClick() {
    this.setState({ test: require('./img/Pause_btn.png') });
  }

  render() {
    return (
      <View style={Styles.mainView}>
      <View>
        <Image source={require('./img/cover.jpg')} style={Styles.image} />
        <Text onPress={() => this._loginBtnClick()}>Hello</Text>
        <TouchableHighlight onPress={this._handleClick.bind(this)} style={MainStyles.button}
          underlayColor="#CA5D3E">
          <View>
            <Image source={this.state.test} style={Styles.playButton}/>
          </View>
        </TouchableHighlight>
        <List/>
      </View>
      </View>
    );
  }
}

let MainStyles = StyleSheet.create({
  button: {
    width: 20,
    borderRadius: 50,
  },
});
AppRegistry.registerComponent('RadioNative', () => RadioNative);
