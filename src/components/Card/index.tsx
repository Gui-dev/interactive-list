import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles, HEIGHT, MARGIN_BOTTOM } from './style'

export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM

export interface CardProps {
  id: number
  title: string
}

interface Props {
  data: CardProps
}

export const Card = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <MaterialIcons
        name="drag-indicator"
        size={32}
        color="#EEE"
      />
    </View>
  )
}
