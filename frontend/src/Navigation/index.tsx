import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Workout from "../Screens/Workout";
import History from "../Screens/History";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}