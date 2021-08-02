import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home/Home';
import Question from '../views/Question/Question';
import Results from '../views/Results/Results';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        options={{
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
