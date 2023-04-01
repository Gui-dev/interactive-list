import { View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

import { Header } from '../../components/Header'
import { MovableCard } from '../../components/MovableCard'

import { CARD_HEIGHT } from '../../components/Card'
import { CARDS } from '../../data/cards'

import { styles } from './style'

export const List = () => {
  const scrollY = useSharedValue(0)
  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  })

  const listToObject = (list: typeof CARDS) => {
    const listOfCards = Object.values(list)
    const object: any = {}
    listOfCards.forEach((card, index) => {
      object[card.id] = index
    })
    return object
  }
  const cardsPosition = useSharedValue(listToObject(CARDS))

  return (
    <View style={styles.container}>
      <Header />
      <Animated.ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: CARDS.length * CARD_HEIGHT,
          paddingBottom: 100
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {CARDS.map(item => {
          return (
            <MovableCard
              key={item.id}
              data={item}
              scrollY={scrollY}
              cardsPosition={cardsPosition}
              cardsCount={CARDS.length}
            />
          )
        })}
      </Animated.ScrollView>
    </View>
  )
}
