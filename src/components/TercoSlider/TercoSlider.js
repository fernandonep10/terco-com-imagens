import React, { useRef } from "react";
import { View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import styles from "./TercoSliderEstilo";
import { imagens } from "../../../assets/images/imagemMapeamento"; // Importe o mapeamento de imagens

const PAGE_WIDTH = 300; // Largura de cada item
const PAGE_HEIGHT = 200; // Altura de cada item

export default function TercoSlider({ misterioAtual }) {
  const DATA = misterioAtual.oracoes.map(
    (item) => imagens[item.icone.split("/").pop()]
  );
  const progress = useSharedValue(0);

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        data={DATA}
        style={styles.carrosel}
        height={60} // Altura do carrossel
        vertical={true} // Direção vertical
        width={60} // Largura de cada item
        loop={false} // Permite rotação infinita
        defaultIndex={1} // Índice inicial
        pagingEnabled={true} // Ativa o encaixe automático
        snapEnabled={true} // Ativa o snap
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image
              source={item} // Imagem do mapeamento
              style={styles.carouselImage}
            />
          </View>
        )}
      />
    </View>
  );
}
