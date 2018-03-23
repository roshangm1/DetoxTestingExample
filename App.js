/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput,
  FlatList
} from 'react-native';

import {Counter} from './Counter';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { buttonPressed: 0 };
  }

  handleButtonPress = () => {
    this.setState({ buttonPressed: this.state.buttonPressed + 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text testID ={"welcome"} style={styles.welcome}>
          Welcome to React Native!
        </Text>
      
        <Counter value ={this.state.buttonPressed} style={styles.instructions} testID={"runningState"} />
       
        <Button title ={"startButton"} onPress = {() => this.handleButtonPress()} testID={"startButton"} />
          <TextInput testID="input" style={styles.input} />

          <View style={styles.listContainer}>
            <FlatList 
              testID={"list"}
              data ={["Roshan", "Prasanna", "Avaaj", "Rameswor"]}
              renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}

            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1
  },
  listContainer: {
    height: 100,
    width: "80%",
    backgroundColor: '#eee'
  },
  listItem: {
    height: 50
  }
});
