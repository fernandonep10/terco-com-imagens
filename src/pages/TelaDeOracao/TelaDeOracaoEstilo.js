import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  largeComponent: {
    flex: 6, // 60% da tela
    backgroundColor: "darkblue", // Apenas para visualização
    justifyContent: "center", // Centraliza o texto verticalmente
    zIndex: 0,
  },
  smallComponent: {
    flex: 4, // 40% da tela
    backgroundColor: "rgba(0, 0, 0, 1)", // Fundo branco com 50% de transparência
    zIndex: 1,
    backgroundColor: "black",
  },
});

export default styles;
