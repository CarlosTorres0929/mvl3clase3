/*  Author: Carlos Daniel Torres Montoya
  Actividad 1. Crear 6 recuadros separados en la vista

*/ 
/*

import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Que mas hermano")};
  const [name, setName] = useState(""); 
  return (

    <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.box6}>
          <Text style={styles.text}>6</Text>
        </View>
      </View>
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    position: 'absolute',
    top: 150,
    left: 40,
    width: 150,
    height: 150,
    backgroundColor: 'red',
    borderColor: "black"
  },
  box2: {
    position: 'absolute',
    top: 150,
    left: 300,
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    borderColor: "black"
  },
  box3: {
    position: 'absolute',
    top: 350,
    left: 40,
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderColor: "black"
  },
  box4: {
    position: 'absolute',
    top: 350,
    left: 300,
    width: 150,
    height: 150,
    backgroundColor: '#0FE8DB',
    borderColor: "black"
  },
  box5: {
    position: 'absolute',
    top: 600,
    left: 40,
    width: 150,
    height: 150,
    backgroundColor: '#E83D0F',
    borderColor: "black"
  },
  box6: {
    position: 'absolute',
    top: 600,
    left: 300,
    width: 150,
    height: 150,
    backgroundColor: '#E8E80F',
    borderColor: "black"
  },
  text: {
    color: '#ffffff',
    fontSize: 80
  }
});

Actividad 2:
realizar interfaz de login 

*/

import React,{useState} from 'react';
import { StyleSheet, 
  Text, View, Image, 
  TextInput, Button,
  Alert } from 'react-native';

export default function App() {
  //const saludo = () =>{Alert.alert("Hola Cesde")};
  //const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text  style={styles.Text1}>La Casa Del Terror</Text>
      <Image style={styles.logo} source={require('./assets/traje.png')}/>
      
      <TextInput placeholderTextColor="black" maxLength={5} style={styles.textInput} placeholder="Email" onChangeText={(text)=>setName(text)}/>
      <Text></Text>
      <TextInput placeholderTextColor="black" maxLength={5} style={styles.textInput1} placeholder="Password" onChangeText={(text)=>setName(text)}/>
    
      <Button
          title="Iniciar Session"
          color="#2C26CF"
          width="200"
          borderRadius="25"
          onPress={() => Alert.alert('Que mas hermano')}
        />
        <Text style={styles.Text2}>Create Account</Text>
        <Text style={styles.Text3}>Forgot Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FC7E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    top: -200
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 1,
    top: -120,
    borderRadius: 25,
    width: 400,
    height: 50,
    textAlign: 'center',
    padding: 15
  },

  textInput1: {
    borderColor: '#000000',
    top: -100,
    borderWidth: 1,
    borderRadius: 25,
    width: 400,
    height: 50,
    textAlign: 'center'
  },
  Text1: {
    top: -130,
    height: 150,
    width: 250,
    fontSize: 30,
  },
  Text2: {
    position: 'absolute',
    left: 22,
    top: 750,
    height: 160,
    width: 250,
    fontSize: 15,
  },
  Text3: {
    position: 'absolute',
    left: 300,
    top: 750,
    height: 160,
    width: 250,
    fontSize: 15,
  },
  button: {
    top: -140,
    width: 400,
    height: 50,
    textAlign: 'center',
    borderRadius: 25
  }
});
