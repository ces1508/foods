import React from 'react'
import { TouchableOpacity, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductBreads = props => {
  return <FlatList
    extraData={props.bread}
    data={props.breads}
    keyExtractor={item => item}
    numColumns={2}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 10,
          borderColor: props.bread === item ? 'green' : 'gray',
          borderRadius: 10,
          borderWidth: props.bread === item ? 2 : 1 }}>
        <Icon name='bread-slice-outline' size={28} />
        <Text
          onPress={() => props.onPress(item)}>
          {item}
        </Text>
      </TouchableOpacity>
    )}
  />
}

export default ProductBreads
