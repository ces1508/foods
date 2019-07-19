import React from 'react'
import { Text, FlatList } from 'react-native'

const ProductBreads = props => {
  return <FlatList
    extraData={props.bread}
    data={props.breads}
    keyExtractor={item => item}
    numColumns={2}
    renderItem={({ item }) => <Text
      onPress={() => props.onPress(item)}
      style={{
        padding: 10,
        margin: 10,
        borderColor: props.bread === item ? 'green' : 'gray',
        borderRadius: 10,
        borderWidth: 1 }}>
      {item}
    </Text>}
  />
}

export default ProductBreads
