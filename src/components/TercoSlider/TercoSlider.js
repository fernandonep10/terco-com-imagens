import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { imagens } from "../../../assets/images/imagemMapeamento";
import styles from "./TercoSliderEstilo";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ITEM_BASE_HEIGHT = 100;
const ITEM_EXPANDED_HEIGHT = 140;
const ITEM_SPACING = 0;
const VISIBLE_ITEMS = 3;

export default function TercoSlider({ misterioAtual, onItemChange }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const currentIndex = useRef(0);

  const ITEM_FULL_HEIGHT = ITEM_BASE_HEIGHT + ITEM_SPACING;
  const CONTAINER_HEIGHT = ITEM_FULL_HEIGHT * VISIBLE_ITEMS;

  const DATA = misterioAtual.oracoes.map((item, index) => {
    const nomeImagem = item.icone.split("/").pop(); // exemplo: "anunciacao.jpg"
    return {
      key: String(index),
      imagem: imagens[nomeImagem], // busca em imagemMapeamento.js
      oracao: item.oracao,
    };
  });

  const handleEndDrag = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const delta = offsetY - currentIndex.current * ITEM_FULL_HEIGHT;

    // Determina se o movimento foi suficiente pra mudar de item
    if (Math.abs(delta) < ITEM_FULL_HEIGHT / 2) {
      // Volta ao item atual
      flatListRef.current.scrollToOffset({
        offset: currentIndex.current * ITEM_FULL_HEIGHT,
        animated: true,
      });
      return;
    }

    if (delta > 0 && currentIndex.current < DATA.length - 1) {
      currentIndex.current += 1;
    } else if (delta < 0 && currentIndex.current > 0) {
      currentIndex.current -= 1;
    }

    flatListRef.current.scrollToOffset({
      offset: currentIndex.current * ITEM_FULL_HEIGHT,
      animated: true,
    });

    if (onItemChange) {
      onItemChange(DATA[currentIndex.current].oracao);
    }
  };

  return (
    <View
      style={[styles.container, { height: "100%", backgroundColor: "#222" }]}
    >
      <Animated.FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        bounces={false}
        inverted={true}
        snapToInterval={ITEM_FULL_HEIGHT}
        decelerationRate="fast"
        onScrollEndDrag={handleEndDrag}
        contentContainerStyle={{
          paddingTop: "35%",
          paddingBottom: "35%",
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_FULL_HEIGHT,
            index * ITEM_FULL_HEIGHT,
            (index + 1) * ITEM_FULL_HEIGHT,
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1.2, 1],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{
                height: ITEM_BASE_HEIGHT,
                width: 100,
                marginVertical: ITEM_SPACING / 2,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ scale }],
              }}
            >
              <Animated.Image
                source={item.imagem}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                  transform: [{ scale }],
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
