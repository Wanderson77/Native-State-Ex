/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idade: 2,
      nome: "React Native"
     };
  }

  handleAumentaIdade = () => {
    this.setState({idade: this.state.idade + 1});
  }

  render() {
    const {nome, idade} = this.state;
    return (
      <View style={styles.container}>
        <Text>Ola {nome}</Text>
        <Text>Idade {idade}</Text>
        <Button onPress={this.handleAumentaIdade} title="Aumentar idade" />
      </View>
    );
  }
}

export default App;



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
