import { StatusBar } from 'expo-status-bar'

import { List } from './src/screens/List'

export default function App () {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#222" translucent />
      <List />
    </>
  )
}
