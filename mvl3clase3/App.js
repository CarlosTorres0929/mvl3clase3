import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Que mas hermano")};
  const [name, setName] = useState(""); 
  return (

    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/traje.png')}/>
      <TextInput maxLength={10} style={styles.textInput} placeholder="usuario" onChangeText={(text)=>setName(text)}/>
      <Button title="Start" onPress={saludo}></Button>
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
  boton:{
    borderColor: '#F4D03F',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,  
    width: 200,
    height: 50
  }
});

