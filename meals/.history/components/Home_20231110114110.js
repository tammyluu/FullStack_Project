import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {use}

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>Home</Text>
      <Button title=' All Categories' onPress={()=>navigation.navigate("Category",{})}></Button>
      <Button title='Your Meal Detail' onPress={()=>navigation.navigate("Detail",{})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      myText:{
        fontSize : 50,
        fontWeight: 'bold',
      }
})