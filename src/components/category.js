import React from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const Category = props => {
  let { image, name } = props.category
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.image}
      source={{ uri: image }}>
      <TouchableOpacity onPress={() => alert('hola mundo')}>
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Category

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff'
  }
})
