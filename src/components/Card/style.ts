import { StyleSheet } from 'react-native'

export const HEIGHT = 68
export const MARGIN_BOTTOM = 12

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    height: HEIGHT,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
})
