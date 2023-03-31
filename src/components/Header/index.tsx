import { Text, View } from 'react-native'

import { styles } from './style'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <Text style={styles.subtitle}>
        Define a sequência de assuntos que você mais gosta no topo da lista
      </Text>
    </View>
  )
}
