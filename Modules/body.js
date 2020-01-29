//Importando elementos do React Native que iremos usar no aplicativo
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

//Importando um acervo de ícones que será usado para o botão de adicionar tarefas
import Icon from 'react-native-vector-icons/Ionicons';

//Classe que está sendo exportada quando o arquivo é chamado, e específicando que este é um componente
export class Body extends Component{
  //Variável de estado do aplicativo
  state = {
    items: [], //Variável do tipo 'lista' (array) que guarda as tarefas que serão adicionadas pelo usuário
    text:'' //Variável do tipo 'texto' que guarda o texto que o usuário está digitando
  }

  //Funcão para mostrar a caixinha de cada tarefa na tela
  //Quando essa função é chamada ela recebe a tarefa (item) e a identificação desta tarefa (index)
  renderItem(item, index){
    //Essa palavra determina o que a função vai retornar quando ela for chamada
    return(
        //"Caixa" da tarefa
        <View style={styles.card}>

          //Retângulo que mostra se a tarefa foi feita ou não
          <View style={{width:20,height:40,backgroundColor:item.done,marginRight:10}}>
          </View>

          //Texto da tarefa em questão
          <Text>{item.text}</Text>

          //Botão para marcar a tarefa como feita ou não
          <TouchableOpacity style={{position:'absolute', right:70}} onPress={() => this.toggleTask(index)}>
            //Esse elemento mostra um ícone do acervo que foi importado lá em cima
            <Icon name='ios-checkmark-circle-outline' size={50} />
          </TouchableOpacity>

          //Botão para deletar a tarefa em questão
          <TouchableOpacity style={{position:'absolute', right:10}} onPress={() => this.delTask(index)}>
            //Esse elemento mostra um ícone do acervo que foi importado lá em cima
            <Icon name='md-trash' size={50} />
          </TouchableOpacity>
        </View>
    );
  }


  //Função que é chamada para adicionar tarefas
  addTask(){

    //Aqui o texto que estava na variável 'this.state.text' é "empurrado, adicionado" na lista de tarefas (this.state.items)
    this.state.items.push({
      //Cada item dentro da lista 'this.state.items' tem duas informaçõelse
      //1º: text -> Guarda o texto da tarefa
      //2º: done -> Diz se a tarefa está concluída ou não ('red' se não estiver concluída ou 'green' se concluída)
      text:this.state.text,
      done:'red',
    });

    //Apaga o que estava escrito na caixa de texto
    this.setState({text:''});
  }


  //Função que é chamada para deletar tarefas, ela recebe a identidade (id) da tarefa que deve ser deletada
  delTask(id){

    //Este comando vai na lista de tarefas e deleta a tarefa com o id que foi passado
    this.state.items.splice(id, 1);

    //Apaga o que estava escrito na caixa de texto
    this.setState({text:''});
  }


  //Função que é chamada para mudar o estado de uma tarefa
  //Se ela estava marcada como concluída, esta função vai marcá-la como não concluída
  //Se ela estava marcada como não concluída, esta função vai marcá-la como concluída
  // Esta função também recebe a identificação (id) da tarefa que deve trabalhar
  toggleTask(id){

    //Esta é uma estrutura condicional
    //Ela funciona assim, se (if) o que estiver entre parenteses for verdade, faz o que está entre as chaves do 'if'
    //Senão (else), ou seja se o que estiver dentro dos parenteses do 'if' não for verdade, faz o que está entre
    //as chaves do 'else'
    if(this.state.items[id].done == 'red'){ //Se a tarefa com tal 'id' estiver marcada como não concluída ('done' for igual a 'red')
      this.state.items[id].done = 'green'; //Marca a tarefa como feita ('done' igual a 'green')
    }else{ //Senãom se a tarefa com tal 'id' estiver marcada como concluída ('done' for igual a 'green')
      this.state.items[id].done = 'red'; //Marca a tarefa como não feita ('done' igual a 'red')
    }

    //Apaga o que estava escrito na caixa de texto
    this.setState({text:''});
  }


  //Essa função que renderizará (processará) os componentes na tela
  render() {
    return (
      //"Caixa" maior
      <View style={styles.container}>
        //"Caixa" que guarda a caixa de texto e o botão de adicionar tarefas
        <View style={styles.toolbar}>
          //Elemento da caixa de tarefas
          <TextInput
            style={{height: 40,width:'70%',marginLeft:10,borderColor: 'gray',borderWidth: 1,borderRadius:10,padding:10}}
            onChangeText={text => this.setState({text:text})}
            onSubmitEditing={() => this.addTask()}
            placeholder=' > Tarefa'
            value={this.state.text}
          />

          //Botão de adicionar tarefas
          <TouchableOpacity style={styles.button} onPress={() => this.addTask()}>
            //Esse elemento mostra um ícone do acervo que foi importado lá em cima
            <Icon name='md-add-circle' size={100} color='green' />
          </TouchableOpacity>
        </View>


        //Elemento que renderiza uma lista com o que está em seu 'data'
        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

//Aqui estão definidos a estilização dos componentes que foram usados ali em cima
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  list: {
    width:400,
    padding:10,
    backgroundColor:'#fff',
  },
  toolbar: {
    marginTop:80,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10,
    width:100,
    height:100,
    borderRadius:50
  },
  card: {
    flexDirection:'row',
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 10,
    width:'100%',
    padding:20,
    marginTop:10,
  }
});
