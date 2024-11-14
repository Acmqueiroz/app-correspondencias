import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function AdicionarCorrespondenciaScreen({ navigation }) {
  const [description, setDescription] = useState('');

  const handleAddCorrespondencia = () => {
    if (description) {
      Alert.alert('Sucesso', 'Correspondência adicionada com sucesso.');
      navigation.goBack(); // Volta para a tela anterior (Correspondências)
    } else {
      Alert.alert('Erro', 'Por favor, preencha a descrição da correspondência.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descrição da Correspondência"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Adicionar" onPress={handleAddCorrespondencia} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
