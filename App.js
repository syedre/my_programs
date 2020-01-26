import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput,Alert } from 'react-native';
import Constants from 'expo-constants';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'




// You can import from local files


// or any pure javascript modules available in npm

 class Appa extends React.Component {
  
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen
});

export default createAppContainer(AppDrawerNavigator);

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
*/
