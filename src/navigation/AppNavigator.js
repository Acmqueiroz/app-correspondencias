import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Corrija os caminhos para refletir a estrutura correta do seu projeto
import LoginScreen from '../screens/LoginScreen'; // Atualize o caminho conforme necessário
import CreateAccountScreen from '../screens/CreateAccountScreen';
import CorrespondenciasScreen from '../screens/CorrespondenciasScreen';
import HomeScreen from '../screens/HomeScreen'; // Se você tiver uma tela Home

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: 'Criar Conta' }}
        />
        <Stack.Screen
          name="Correspondencias"
          component={CorrespondenciasScreen}
          options={{ title: 'Correspondências' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }} // A tela inicial do app
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
