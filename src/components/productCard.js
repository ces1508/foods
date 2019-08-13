import React, { Component } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import ProductImage from './ProductImage'
import FavoriteIcon from './favoriteicon'
import Theme from '../Theme'
import { addToFavorites, removeFromFavorites } from '../ducks/favorites'
import { connect } from 'react-redux'

const mapStateToProsp = state => ({ favorites: state.favorites.favorites })
const mapDispatchToprops = { addToFavorites, removeFromFavorites }

class ProductCard extends Component {
  state = {
    isFavorite: -1
  }
  isFavorite () {
    return this.props.favorites.findIndex(item => item.id === this.props.id)
  }
  static getDerivedStateFromProps(props, state) {
    let indexFavorite = props.favorites.findIndex(item => item.id === props.product.id)
    if (indexFavorite !== state.isFavorite) {
      return {
        isFavorite: indexFavorite
      }
    }
    return null
  }
  handleFavorite () {
    let { isFavorite } = this.state
    if (isFavorite >= 0) {
      return this.props.removeFromFavorites(isFavorite)
    }
    this.props.addToFavorites(this.props.product)
  }
  render () {
    return (
      <TouchableOpacity  onPress={this.props.onPress} style={styles.card}>
        <ProductImage src={this.props.image} />
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text numberOfLines={2} style={[styles.productText, styles.productTitle]}>
              { this.props.name }
            </Text>
            {
              this.props.ShowIcon
                ? <FavoriteIcon isFavorite={this.state.isFavorite >= 0} onPress={() => this.handleFavorite()} />
                : null
            }
          </View>
          <View style={styles.cardBody}>
            {this.props.children}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

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
    flexDirection: 'row',
    marginBottom: 40,
    height: 'auto',
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
    // fontWeight: 'bold',
    color: Theme.colors.title,
    fontSize: 18,
    marginRight: 50,
    // fontFamily: 'UNIVERSAL-SCRIPT-PERSONAL-USE'
    fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})

export default connect(mapStateToProsp, mapDispatchToprops)(ProductCard)
