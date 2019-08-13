import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import uuid from 'uuid/v1'

const ShoppingCartItemOptionsList = props => (
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

ShoppingCartItemOptionsList.propTypes = {
  list: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired
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
    fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})

export default ShoppingCartItemOptionsList
