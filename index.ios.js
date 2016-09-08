import React, { Component } from 'react';
import List from './components/list.react';
import Styles from './styles/main';
import Button from 'react-native-button';
import Dimensions from 'Dimensions';
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

     this.width = Dimensions.get('window').width;
     this.height = Dimensions.get('window').height;
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
      <Image source={require('./img/Covers/img10.jpg')} style={Styles.backgroundImage}>
        <View style={Styles.box}>
          <Text></Text>
          <TouchableHighlight onPress={this._handleClick.bind(this)} style={MainStyles.button}
            underlayColor="#CA5D3E">
            <View>
              <Image source={this.state.test} style={Styles.playButton}/>
            </View>
          </TouchableHighlight>
          <List/>
        </View>
      </Image>
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
