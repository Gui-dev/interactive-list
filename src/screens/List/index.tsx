import { ScrollView, View } from 'react-native'
import { Card } from '../../components/Card'

import { Header } from '../../components/Header'
import { CARDS } from '../../data/cards'

import { styles } from './style'

export const List = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        {CARDS.map(item => {
          return (
            <Card
              key={item.id}
              data={item}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
