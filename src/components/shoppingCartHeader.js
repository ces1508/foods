import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import Theme from '../Theme'

const ShoppingCartItemHeader = props => (
  <ImageBackground
    source={{ uri: props.image }}
    style={styles.image}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  </ImageBackground>
)

ShoppingCartItemHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  image: {
    height: 150
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .25)'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: Theme.colors.text.yellow,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})

export default ShoppingCartItemHeader
