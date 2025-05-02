import React, { useRef, useState } from "react";
import { Animated, Dimensions, Image, View, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./TercoSliderEstilo";
import { imagens } from "../../../assets/images/imagemMapeamento"; // Importe o mapeamento de imagens

export default function TercoSlider({ misterioAtual }) {
  // Extrair apenas os nomes dos ícones de misterioAtual.oracoes
  const DATA = misterioAtual.oracoes.map((item) => item.icone.split("/").pop());
  const width = Dimensions.get("window").width;
  const PAGE_WIDTH = 60; // Largura de cada item do carrossel
  const PAGE_HEIGHT = 60; // Altura de cada item do carrossel

  const r = useRef(null);
  const [loop, setLoop] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0); // Para rastrear o item atual

  const handleSnapToItem = (index) => {
    //console.log(index);
    // Atualizar o índice atual ao "snap"

    // console.log("-----");
    // console.log("ITEM ATUAL " + currentIndex);
    // console.log("NOVO ITEM " + index);

    // if (index == 0 && currentIndex == DATA.length - 1) {
    //   r.current.scrollTo({ count: currentIndex, animated: true });
    //   setCurrentIndex(currentIndex);
    //   return;
    // }

    // if (index == DATA.length - 1 && currentIndex == 0) {
    //   r.current.scrollTo({ index: currentIndex, animated: true });
    //   setCurrentIndex(currentIndex);
    //   console.log("teste");
    //   return;
    // }

    setCurrentIndex(index);
  };

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        style={styles.carrosel}
        ref={r}
        loop={false}
        vertical={true}
        //onSnapToItem={handleSnapToItem}
        height={200}
        width={160}
        data={DATA}
        viewCount={3}
        scrollAnimationDuration={200}
        renderItem={({ item }) => (
          <View style={styles.corrouselItem}>
            <Image
              source={imagens[item]} // Usando o mapeamento de imagens
              style={{ width: 60, height: 60 }}
            />
          </View>
        )}
      />
    </View>
  );
}
