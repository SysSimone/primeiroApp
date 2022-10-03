import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ele era o cara!!
Após ver um folheto sobre microprocessador, Wozniak teve uma visão onde visualizou "um teclado, uma tela e um computador, todos juntos num pacote integrado".
Após meses trabalhando no projeto, surgem os primeiros caracteres na tela, em resposta ao digitar das teclas. "Digitei algumas teclas no teclado e fiquei chocado! 
As letras apareceram na tela. Foi a primeira vez na história que alguém digitou uma letra num teclado e viu aparecer na tela de seu computador, bem na sua frente"
afirmou Wozniak. Fascinado pela funcionalidade do aparelho, Jobs convenceu Wozniak a comercializar o equipamento. Para tanto, decidiram abrir uma empresa. 
Entre as primeiras sugestões para nome estavam termos da computação como Matrix, neologismos como Executek e nomes "desinteressantes" como Personal Computer Inc. 
Por fim, Jobs propõe Apple Computers. "</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
