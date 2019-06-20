import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import ProductImage from './ProductImage'
import FavoriteIcon from './favoriteicon'
import Theme from '../Theme'

const ProductCard = props => (
  <View style={styles.card}>
    <ProductImage src={props.image} />
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={[styles.productText, styles.productTitle]}>
          { props.name }
        </Text>
        {
          props.ShowIcon
            ? <FavoriteIcon />
            : null
        }
      </View>
      <View style={styles.cardBody}>
        {props.children}
      </View>
    </View>
  </View>
)

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ShowIcon: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool
}

ProductCard.defaultProps = {
  ShowIcon: false,
  isFavorite: false
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 40,
    flex: 1,
    backgroundColor: Theme.colors.white
  },
  cardContainer: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardBody: {
    flexDirection: 'column',
    flex: 1
  },
  productTitle: {
    fontWeight: 'bold',
    color: Theme.colors.title,
    fontSize: 18
  }
})

export default ProductCard
