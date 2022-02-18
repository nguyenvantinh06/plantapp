import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme }  from '@react-navigation/native';
import {PlantDetail} from "./src/screens";

//BottomTabNavigation
import TabBottom from "./src/navigations/BottomTabNavigation";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={"Home"}
      >
        {/* BottomTabNavigation */}
        <Stack.Screen name="Home" component={TabBottom} options={{headerShown: false,}} />

        {/* Screen */}
        <Stack.Screen name="PlantDetail" component={PlantDetail} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
