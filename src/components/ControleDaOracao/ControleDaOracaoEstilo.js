import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textoBranco: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  oracaoAtual: {
    flex: 1,
    backgroundColor: "black",
  },

  playerDaOracao: {
    flex: 3,
    backgroundColor: "gray",
  },

  tercoSlider: {
    flex: 2,
    backgroundColor: "blue",
  },

  horizontalContainer: {
    flexDirection: "row", // Define layout horizontal
    justifyContent: "space-between", // Espaçamento entre os itens
    alignItems: "center", // Alinha os itens verticalmente
    flex: 2,
  },
});

export default styles;
