
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        { id: '1', nome: 'Camiseta', preco: 49.99, estoque: 12 },
        { id: '2', nome: 'Calça Jeans', preco: 89.9, estoque: 5 },
        { id: '3', nome: 'Tênis', preco: 199.99, estoque: 7 },
        { id: '4', nome: 'Boné', preco: 29.9, estoque: 20 },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Produto data={item} />}
        />
      </View>
    );
  }
}

class Produto extends Component {
  render() {
    return (
      <View style={styles.caixa}>
        <Text style={styles.texto}>Produto: {this.props.data.nome}</Text>
        <Text style={styles.texto}>Preço: R$ {this.props.data.preco}</Text>
        <Text style={styles.texto}>Estoque: {this.props.data.estoque}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  caixa: {
    backgroundColor: '#444',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  texto: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default App;