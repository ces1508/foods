import React from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, StyleSheet } from 'react-native'

const CartIcon = props => (
  <View style={styles.container}>
    <Text style={styles.badge}>5</Text>
    <Icons style={styles.icon} name='cart-outline' size={30} />
  </View>
)

export default CartIcon

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    position: 'absolute',
    top: -10,
    right: 5
  },
  icon: {
    color: '#000'
  }
})
