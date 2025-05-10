import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Easing, PanResponder } from "react-native";
import styles from "./OracaoAtualEstilo";

export default function OracaoAtual({ texto }) {
  const scrollAnim = useRef(new Animated.Value(0)).current;

  const [containerHeight, setContainerHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

  // Toda vez que MUDAR: texto, containerHeight ou textHeight
  useEffect(() => {
    //Só executa a animação se o a janela por onde o texto é visto for menor que o texto
    if (containerHeight > 0 && textHeight > containerHeight) {
      // para qualquer animação em curso e reseta
      scrollAnim.stopAnimation();
      scrollAnim.setValue(0);

      Animated.timing(scrollAnim, {
        toValue: -(textHeight - containerHeight),
        // ajusta a duração: quanto mais texto, mais lento.
        duration: (textHeight - containerHeight) * 90,
        useNativeDriver: true,
        easing: Easing.bezier(0.09, 0.0, 1.0, 1.0),
      }).start();
    }
  }, [texto, containerHeight, textHeight]);

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        // mede a altura real do container (janela de visualização do texto)
        setContainerHeight(e.nativeEvent.layout.height);
      }}
    >
      <Animated.View
        style={[
          styles.textContainer,
          { transform: [{ translateY: scrollAnim }] },
        ]}
      >
        <Text
          style={styles.textoBranco}
          onLayout={(e) => {
            // mede a altura real do bloco de texto
            setTextHeight(e.nativeEvent.layout.height);
          }}
        >
          {texto}
        </Text>
      </Animated.View>
    </View>
  );
}
