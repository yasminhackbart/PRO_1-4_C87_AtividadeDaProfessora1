import 'react-native-gesture-handler';
import * as React from 'react';
// navegação entre telas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importe as classes criadas
import HomeScreen from "./screens/Home";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      // crie as outras stacks. screens
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
