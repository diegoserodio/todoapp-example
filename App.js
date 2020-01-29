//Importando elementos do React Native que iremos usar no aplicativo
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Importando os módulos que foram criados
import {Header} from './Modules/header'
import {Body} from './Modules/body'


export default function App() {
  return (
    //"Caixa geral" que pega toda a tela do aplicativo
    <View style={styles.container}>
      <Body /> //Aqui será renderizado(processado) o que está no arquivo 'body.js' que está na pasta 'Modules'
      <Header /> //Aqui será renderizado(processado) o que está no arquivo 'header.js' que está na pasta 'Modules'
    </View>
  );
}

//Aqui estão definidos a estilização dos componentes que foram usados ali em cima
const styles = StyleSheet.create({
  //Propriedades visuais que serão aplicadas a todo elemento que tiver como 'style' o 'styles.container', ex: style={styles.container}
  container: {
    flex: 1, //Define que a caixa pegará a tela inteira
    backgroundColor: '#fff', //Define a cor de fundo como branco
  },
});
