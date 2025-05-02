import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6", // Fundo azul claro
    alignItems: "center",
    justifyContent: "center",
  },
  carrosel: {
    backgroundColor: "#000",
    flex: 1,
  },
  carouselItem: {
    width: 60, // Largura do item
    height: 60, // Altura do item
    marginBottom: 150, // Espaçamento entre os itens
    borderRadius: 30, // Bordas arredondadas
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Garante que a imagem não ultrapasse os limites
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
