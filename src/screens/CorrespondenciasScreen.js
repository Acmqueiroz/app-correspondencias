import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CorrespondenciasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Correspondências</Text>
      <Text>Você tem 3 correspondências pendentes para retirar.</Text>
      <Button title="Adicionar Nova Correspondência" onPress={() => navigation.navigate('AdicionarCorrespondenca')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
