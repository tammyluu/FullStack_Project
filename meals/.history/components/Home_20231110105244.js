import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title=' All Categories' onPress={()=>navigation.navigate("Category",{})}></Button>
      <Button title='' onPress={()=>navigation.navigate("Detail",{})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})