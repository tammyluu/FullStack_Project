import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// expo install react-native-gesture-handler

const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <Provider>
    
  </Provider>
  );
}

const styles = StyleSheet.create({});
