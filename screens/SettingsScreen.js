import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Compo from './compo'
import Search from './search'
import {Header,Left,Right,Icon} from 'native-base'

class SettingsScreen extends Component {
  render() {
    return (
      <View style= {styles.container} >
        <Header style ={styles.header}>
          <Left>
            <Icon name = "menu" onPress= {()=>this.props.navigation.openDrawer()} />
          </Left>
        </Header>
       <Compo/>
        
        
      </View>
    );
  }
}
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'left',
    flexDirection:'row',
    //flex: 1,
    //justifyContent: 'center',
  
    //backgroundColor: '#ecf0f1',
    //padding: 8,

  },
  header:{
    flexDirection:'row',
    backgroundColor:'white',
    padding:2

  },

  });
