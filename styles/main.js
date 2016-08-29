import {
  StyleSheet,
} from 'react-native';

let Styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
    marginRight: 40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  mainView: {
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  playButton: {
    width: 100,
    height: 100,
  },
});

export default Styles;
