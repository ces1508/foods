import React, { useState } from 'react'
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'
import { PacmanIndicator } from 'react-native-indicators'
import Theme from '../Theme'

const Category = props => {
  let { image, name } = props.category
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('products', { category: props.category })}>
        <Image
          onLoad={() => setIsLoaded(true)}
          resizeMode='stretch'
          style={[styles.image, { height: !isLoaded ? 0 : 200 }]}
          source={{ uri: image }} />
        {!isLoaded ?
          <View style={[styles.container, { height: 200 }]}>
            <PacmanIndicator color={Theme.colors.secondary} size={60} /> 
          </View>
        : null}
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})
