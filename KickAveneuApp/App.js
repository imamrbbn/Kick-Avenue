import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { LogBox, StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import store from './src/store'

const Stack = createStackNavigator();

function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" 
            component={ HomeScreen } 
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

export default App;

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
