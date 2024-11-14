<TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate('Detalhes', { nome: item.nome, status: item.status })}
>