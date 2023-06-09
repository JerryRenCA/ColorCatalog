import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen  
          name="Home"
          options={{ title: "List" }}
          component={ColorList}
        />
        <Screen name="Descriptiopn" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
