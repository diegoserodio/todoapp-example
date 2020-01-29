//Importando elementos do React Native que iremos usar no aplicativo
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Classe que está sendo exportada quando o arquivo é chamado, e específicando que este é um componente
export class Header extends Component{

  //Essa função que renderizará (processará) os componentes na tela
  render() {
    return (
      //"Caixa" de cima da tela que tem o nome do aplicativo
      <View style={styles.header}>
        //Texo com o nome do aplicativo
        <Text style={{color:'white', fontSize:25}}>TODO App</Text>
      </View>
    );
  }
}

//Aqui estão definidos a estilização dos componentes que foram usados ali em cima
const styles = StyleSheet.create({
  header: {
    position:'absolute',
    top:24,
    width: '100%',
    height: 50,
    padding: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
