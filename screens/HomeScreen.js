import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style= {styles.container} >
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
    backgroundColor: '#ecf0f1',
    padding: 8,
  }

  });

