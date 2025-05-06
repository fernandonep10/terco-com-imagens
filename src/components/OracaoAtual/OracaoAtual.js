import React from "react";
import { View, Text } from "react-native";
import styles from "./OracaoAtualEstilo";

export default function OracaoAtual({ texto }) {
  console.log(texto); // Log do texto da oração atual

  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.textoBranco}>{texto}</Text>
    </View>
  );
}
