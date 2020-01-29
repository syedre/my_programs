import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Header,Left,Right,Icon} from 'native-base'

class HomeScreen extends Component {
  render() {
    return (
      <View style= {styles.container} >
        <Header style ={styles.header}>
          <Left>
            <Icon name = "menu" onPress= {()=>this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text> Hello  </Text>
        <Icon name="home" />
        <Text> Home </Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'left',
    flexDirection:'row',
    
    
  },
  header :{
    flexDirection:'row',
    backgroundColor:'white',
    padding:10,

  }

  });


