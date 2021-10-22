import React, {Component} from 'react';
import { Platform,StyleSheet,Text,View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload, \n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu for dev menu',
});

type Props= {};
export default class App extends Component<Props>{
  render(){
    return(
      <view style={stylecontainer}>
        <Textstyle={styles.welcome}>Hello World</Text>
        <Textstyle={style.instructions}>To get started, open browser</Text>
        <Textstyle={style.instructions}>{instructions}</Textstyle>
        <Textstyle={style.instructions}>{instructions}</Textstyle>
        <Textstyle={style.instructions}>{instructions}</Textstyle>
      </view>
    );
  }
}
const styles= StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center'
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '333333',
    marginBottom: 5,
  },
});