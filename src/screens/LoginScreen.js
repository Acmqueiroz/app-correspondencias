import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// Caminho para a logo do condomínio
import logo from '../../assets/path-to-logo.jpg'; // Certifique-se de que o caminho está correto

export default function LoginScreen({ navigation }) {
  // Estado para armazenar os valores dos campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, insira seu email e senha.');
    } else {
      // Aqui você pode adicionar a lógica de autenticação
      navigation.navigate('Home'); // Navega para a tela Home
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      
      {/* Título */}
      <Text style={styles.title}>Bem-vindo ao Condomínio Pedra do Sol</Text>
      
      {/* Campo de E-mail */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      
      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Links para "Criar Conta" e "Esqueci a Senha" */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.linkText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Esqueci a senha')}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50', // Cor verde
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  linkText: {
    color: '#3498db', // Cor azul
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
