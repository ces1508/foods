import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const ShoppingCartPlusList = props => (
  <View style={styles.conatinerPlus}>
    {props.list.map(add => (
      <View style={styles.plus}>
        <Icons name='plus-circle-outline' size={20} />
        <Text style={styles.plusName} key={add.id}>
          {add.name}
        </Text>
      </View>
    ))}
  </View>
)

ShoppingCartPlusList.propTypes = {
  list: PropTypes.array.isRequired
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
    marginLeft: 10
  }
})

export default ShoppingCartPlusList
