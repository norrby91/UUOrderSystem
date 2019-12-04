import React from 'react'
import {StyleSheet, Text, View} from 'react-native';


class LoginScreen extends React.Component {
  
  render() {
   
    return (
      <View style = {styles.containner}>
          <Text>LoginScreen</Text>
      </View>
    );
  }
}

export default LoginScreen;

const styles =StyleSheet.create ({
    containner : {
      backgroundColor: '#ffffff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});