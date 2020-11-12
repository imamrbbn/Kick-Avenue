import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading({ navigation }) {

  setTimeout(() => {
    navigation.replace('Home')
  }, 3000)

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading</Text>
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
  title: {
    textAlign: "center",
    fontSize:  30,
    color: '#31326f',
    fontWeight: 'bold'
  }
});