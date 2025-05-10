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
    height: "25%",
    backgroundColor: "black",
    paddingTop: 17,
    paddingBottom: 17,
    overflow: "hidden",
  },

  playerDaOracao: {
    flex: 3,
    backgroundColor: "gray",
  },

  tercoSlider: {
    flex: 2,
    backgroundColor: "blue",
  },

  contencao: {
    flex: 1,
    backgroundColor: "blue",
  },

  horizontalContainer: {
    flexDirection: "row", // Define layout horizontal
    justifyContent: "space-between", // Espaçamento entre os itens
    alignItems: "center", // Alinha os itens verticalmente
    flex: 1,
  },
});

export default styles;
