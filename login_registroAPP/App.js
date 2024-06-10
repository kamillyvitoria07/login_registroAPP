import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { Provider } from "./src/context/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import Article from "./src/screens/ArticleScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Auth' component={AuthStack} />
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Article' component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};
