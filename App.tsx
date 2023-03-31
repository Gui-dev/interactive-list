import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'

import { List } from './src/screens/List'

export default function App () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#222" translucent />
      <List />
    </GestureHandlerRootView>
  )
}
