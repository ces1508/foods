import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import numeral from 'numeral'
import Theme from '../Theme'
import { connect } from 'react-redux'
import { showModal } from '../ducks/modal'
const mapStateToProps = state => ({
  modal: { ...state.modal }
})
const mapDispatchToProps = {
  showModal
}

const ProductItem = props => {
  let { image, name, description, price } = props.product
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.productDescription}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.productText, styles.productTitle]}>{ name }</Text>
          <Icon style={styles.favorite} name='heart-outline' color='red' size={25} />
        </View>
        <Text style={styles.productText}>{ description }</Text>
        <View style={styles.actions}>
          <Text style={[styles.productText, styles.price]}>${ numeral(price).format('0,0') }</Text>
          <Text onPress={() => props.showModal()} style={styles.add}>Add</Text>
        </View>
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)

const styles = StyleSheet.create({
  product: {
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 40
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 8
  },
  productTitle: {
    fontWeight: 'bold',
    color: Theme.colors.title,
    fontSize: 18
  },
  favorite: {
    marginRight: 5
  },
  productDescription: {
    marginLeft: 20,
    flexDirection: 'column',
    flex: 1
  },
  productText: {
    fontSize: 15
  },
  add: {
    backgroundColor: 'green',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  price: {
    color: Theme.colors.title,
    fontWeight: 'bold'
  },
  actions: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: 10,
    color: Theme.colors.iconAdd
  },
  modal: {
    flex: 1,
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
