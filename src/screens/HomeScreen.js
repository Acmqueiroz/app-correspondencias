import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'A entrega de correspondências será das 9h às 18h.' },
    { id: '2', message: 'Reformarão o prédio na próxima semana, os horários de entrega podem ser alterados.' },
    { id: '3', message: 'Lembre-se de retirar suas correspondências dentro de 48 horas.' },
  ]);

  // Função para atualizar o horário e a data a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    
    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  const handleRulePress = () => {
    Alert.alert('Regras do Condomínio', 'Aqui você poderá ver as regras detalhadas...');
  };

  return (
    <View style={styles.container}>
      {/* Boas-vindas */}
      <Text style={styles.greeting}>Bem-vindo ao App de Correspondências!</Text>

      {/* Saudação personalizada baseada no horário */}
      <Text style={styles.timeOfDay}>
        {currentDate.getHours() < 12 ? 'Bom dia' : currentDate.getHours() < 18 ? 'Boa tarde' : 'Boa noite'}!
      </Text>

      {/* Data e Hora */}
      <Text style={styles.dateTime}>
        {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
      </Text>

      {/* Notificações do Condomínio */}
      <Text style={styles.subTitle}>Notificações Importantes</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
      />

      {/* Regras do Condomínio */}
      <TouchableOpacity style={styles.button} onPress={handleRulePress}>
        <Text style={styles.buttonText}>Ver Regras do Condomínio</Text>
      </TouchableOpacity>

      {/* Botão para acessar correspondências */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('Correspondencias')}
      >
        <Text style={styles.buttonText}>Ver Correspondências</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  timeOfDay: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  dateTime: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  notificationText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
