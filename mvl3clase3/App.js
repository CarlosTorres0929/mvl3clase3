import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Dimelo papi!</Text>
        </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Esto es Developer!</Text>
        </View>
      <View style={styles.box3}>
      <Text style={styles.text}>Esto es Developer junior!</Text>
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
  box:{
    flex: 1,
    backgroundColor: '#F7F709',
  },
  box2:{
    flex: 1,
    backgroundColor: '#0922F7',
  },
  box3:{
    flex: 1,
    backgroundColor: '#E80F23',
  }
});
