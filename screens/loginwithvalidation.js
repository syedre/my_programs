import React, { Component } from 'react';
import { Text, View,StyleSheet,TextInput,Button } from 'react-native';



class Search extends Component {
    constructor(props){
      super(props)
      this.state={
        username:"",
        password:""
      }
    }
    validate_field=()=>{
      const {username,password} = this.state
      if ( username =="") {
        alert("please fill username")
        return false
      } else if(password==""){
        alert("please fill password")
        return false

      }
      return true
    }

    making_api=()=>{
      if (this.validate_field()){
        alert("succesfully logged in")
      }
    }
      render() {
    return (
      <View style= {styles.container} >
       <TextInput style={styles.button} placeholder=" e.g email id" 
        onChangeText={(value)=> this.setState({username:value})}
        />
        <TextInput style={styles.button} placeholder=" password" 
        onChangeText={(value) => this.setState({password:value})}
        secureTextEntry={true}
        />

        <Button title = "validate" onPress={()=>this.making_api()}/>
        <Text>{"username ==>"+this.state.username}</Text>
        <Text>{"password ==>"+this.state.password}</Text>
        
      </View>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  button:{
    borderColor:'black',
    borderWidth:2

  },

  });
