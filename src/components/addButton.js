import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, Platform } from 'react-native'

import Theme from '../Theme'

const ProductAddButton = props => (
  <Text
    onPress={props.onPress}
    style={styles.add}>
    Add
  </Text>
)

ProductAddButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  add: {
    backgroundColor: Theme.colors.secondary,
    color: Theme.colors.maingBgColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})

export default ProductAddButton
