import { StyleSheet } from 'react-native'

export const HEIGHT = 32
export const MARGIN_BOTTOM = 32

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    color: '#FFF'
  }
})