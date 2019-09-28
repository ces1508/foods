import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import uuid from 'uuid/v1'

const ShoppingCartItemOptionsList = props => {
  if (Array.isArray(props.list)) {
    return (
      <View style={styles.conatinerPlus}>
        {props.list.map(add => (
          <View style={styles.plus}>
            <Icons name={props.icon} size={20} />
            <Text style={styles.plusName} key={uuid()}>
              {add.name}
            </Text>
          </View>
        ))}
      </View>
    )
  }
  return null
}

ShoppingCartItemOptionsList.propTypes = {
  list: PropTypes.array,
  icon: PropTypes.string
}

ShoppingCartItemOptionsList.defaultProps = {
  icon: 'plus-circle-outline'
}

const styles = StyleSheet.create({
  conatinerPlus: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  plus: {
    minWidth: '45%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  plusName: {
    textAlign: 'center',
    marginLeft: 10,
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})

export default ShoppingCartItemOptionsList
