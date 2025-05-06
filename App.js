import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaDeOracao from "./src/pages/TelaDeOracao/TelaDeOracao";
import PaginaInicial from "./src/pages/PaginaInicial/PaginaInicial";
import {
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { DatabaseProvider } from "./src/context/DatabaseContext"; // Importe o Provider
import { GestureHandlerRootView } from "react-native-gesture-handler";
//import SafeAreaViewManual from "./src/components/SafeAreaViewManual/SafeAreaViewManual";

const Stack = createStackNavigator(); // Adicione esta linha

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <DatabaseProvider style={{ flex: 1 }}>
          <NavigationContainer style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="PaginaInicial">
              <Stack.Screen
                name="PaginaInicial"
                component={PaginaInicial}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TelaDeOracao"
                component={TelaDeOracao}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DatabaseProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
