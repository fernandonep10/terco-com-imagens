import React from "react";
import { View, StatusBar, Platform, StyleSheet } from "react-native";

export default function SafeAreaViewManual({ children, style }) {
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 200; // 20 é o padrão para iOS

  //console.log("StatusBar Height:", statusBarHeight); // Log do valor da altura da StatusBar

  return (
    <View style={[styles.container, { paddingVertical: 1 }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Cor de fundo padrão
  },
});
