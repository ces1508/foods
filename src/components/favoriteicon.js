import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet } from 'react-native'

const FavoriteIcon = props => (
  <Icon
    {...props}
    style={[styles.favorite, props.isFavorite ? styles.isFavorite : {}]}
    name={props.isFavorite ? 'heart' : 'heart-outline'}
    size={25} />
)

FavoriteIcon.propTypes = {
  isFavorite: PropTypes.bool
}

FavoriteIcon.defaultProps = {
  isFavorite: false
}

const styles = StyleSheet.create({
  favorite: {
    marginRight: 5,
    color: '#d1d1d1',
    zIndex: 20,
    position: 'absolute',
    right: 2
  },
  isFavorite: {
    color: 'red'
  }
})

export default FavoriteIcon
