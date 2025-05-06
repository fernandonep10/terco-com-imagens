import React, { useState } from "react";
import { View, Button } from "react-native";
import OracaoAtual from "../../components/OracaoAtual/OracaoAtual";
import PlayerDaOracao from "../../components/PlayerDaOracao/PlayerDaOracao";
import TercoSlider from "../TercoSlider/TercoSlider";
import styles from "./ControleDaOracaoEstilo"; // Crie um arquivo de estilos separado, se necessário

export default function ControlesDeOracao({
  proximoMisterioOuTerco,
  misterioAtual,
  tercoAtual,
}) {
  const [oracaoAtual, setOracaoAtual] = useState(
    misterioAtual.oracoes[0]?.texto || ""
  );

  const handleItemChange = (index) => {
    const novaOracao = misterioAtual.oracoes[index]?.texto || "";
    setOracaoAtual(novaOracao);
  };

  return (
    <View style={styles.container}>
      <View style={styles.oracaoAtual}>
        <OracaoAtual texto={oracaoAtual} />
      </View>

      <View style={styles.horizontalContainer}>
        <View style={styles.playerDaOracao}>
          <PlayerDaOracao />
        </View>

        <View style={styles.tercoSlider}>
          <TercoSlider
            proximoMisterioOuTerco={proximoMisterioOuTerco}
            misterioAtual={misterioAtual}
            tercoAtual={tercoAtual}
            onItemChange={(texto) => setOracaoAtual(texto)}
          />
        </View>
      </View>
    </View>
  );
}
