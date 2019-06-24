import React from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Theme from '../Theme'

const mapStateToProps = state => ({ shoppingCart: state.shoppingCart })

const CartIcon = props => (
  <View style={styles.container}>
    <Text style={styles.badge}>{props.shoppingCart.products}</Text>
    <Icons onPress={() => props.navigation.navigate('shoppingCart')} style={styles.icon} name='cart-outline' size={35} />
  </View>
)

export default connect(mapStateToProps)(CartIcon)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  badge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Theme.colors.secondary,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Theme.colors.text.secundary,
    position: 'absolute',
    top: 3,
    right: 0,
    zIndex: 2,
    lineHeight: 18
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 5,
    color: Theme.colors.secondary,
    fontWeight: '100'
  }
})
