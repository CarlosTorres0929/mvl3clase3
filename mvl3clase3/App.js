import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>La demencia</Text>
      <Image style={styles.logo} source={require('./assets/traje.png')}/>
      <TextInput style={styles.textInput} placeholder="usuario"/>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  textInput:{
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,  
    width: 200,
    height: 50
  },
  bordo:{
 
  }
});

