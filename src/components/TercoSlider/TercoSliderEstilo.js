import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
  },
  flatList: {
    backgroundColor: "#000",
  },
  carouselItem: {
    backgroundColor: "#000",
    marginBottom: "30%",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
