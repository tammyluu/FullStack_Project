import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Category' component={Category} options={{title}}/>
        <Stack.Screen name='Detail' component={Detail}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
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
});
