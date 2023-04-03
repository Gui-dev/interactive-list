import Animated, {
  runOnJS,
  useSharedValue,
  type SharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  withSpring
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { useState } from 'react'

import { CARD_HEIGHT, Card, type CardProps } from '../Card'
import { styles } from './style'

interface MovableCardProps {
  data: CardProps
  cardsPosition: SharedValue<number[]>
  scrollY: SharedValue<number>
  cardsCount: number
}

export const MovableCard = ({ data, cardsPosition, scrollY, cardsCount }: MovableCardProps) => {
  const [moving, setMoving] = useState(false)
  const top = useSharedValue(cardsPosition.value[data.id] * CARD_HEIGHT)

  const objectMove = (positions: number[], from: number, to: number) => {
    'worklet'
    const newPosition = Object.assign({}, positions)
    for (const id in positions) {
      if (positions[id] === from) {
        newPosition[id] = to
      }
      if (positions[id] === to) {
        newPosition[id] = from
      }
    }
    return newPosition
  }

  const longPressGesture = Gesture
    .LongPress()
    .onStart(() => {
      runOnJS(setMoving)(true)
    })
    .minDuration(200)

  const panGesture = Gesture
    .Pan()
    .manualActivation(true)
    .onTouchesDown((_, state) => {
      moving ? state.activate() : state.fail()
    })
    .onUpdate((event) => {
      const positionY = event.absoluteY + scrollY.value
      top.value = positionY - CARD_HEIGHT
      const startPositionList = 0
      const endPositionList = cardsCount - 1
      const currentPosition = Math.floor(positionY / CARD_HEIGHT)

      'worklet'
      const newPosition = Math.max(startPositionList, Math.min(currentPosition, endPositionList))
      if (newPosition !== cardsPosition.value[data.id]) {
        cardsPosition.value = objectMove(cardsPosition.value, cardsPosition.value[data.id], newPosition)
      }
    })
    .onFinalize(() => {
      runOnJS(setMoving)(false)
    })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value - CARD_HEIGHT,
      opacity: withSpring(moving ? 1 : 0.4),
      zIndex: moving ? 1 : 0
    }
  }, [moving])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <GestureDetector gesture={Gesture.Race(longPressGesture, panGesture)}>
        <Card
          data={data}
        />
      </GestureDetector>
    </Animated.View>
  )
}
