import React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'

const ProductImage = props => {
  return (
    <Image source={{ uri: props.src }} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: '100%'
  }
})

export default ProductImage
