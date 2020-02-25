import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.box1}>
      <View style={styles.box2}>
        </View>
        <View style={styles.box3}>
        </View>
        </View>
     
        <View style={styles.box4}>
        <View style={styles.box5}>
        </View>
        <View style={styles.box6}>
        </View>
        </View>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
  },
  text: {
    color: '#fff',
  },
  box1:{
    flex: 1,
    backgroundColor: '#E8930F',
    flexDirection: 'row',
  },
  box2:{
    flex: 1,
    backgroundColor: '#B7E80F',
  },
  box3:{
    flex: 1,
    backgroundColor: '#E80F23',

  },
  box4:{
    flex: 1,
    backgroundColor: '#570FE8',
    flexDirection: 'row',

  },
  box5:{
    flex: 1,
    backgroundColor: '#0FE8CA',
    

  },
  box6:{
    flex: 1,
    backgroundColor: '#0F1FE8',
    
  }
});

