import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ProductOptions extends Component {
  constructor (props) {
    super(props)
    this._addToProduct = this._addToProduct.bind(this)
    this._renderItem = this._renderItem.bind(this)
    this.state = { selected: new Map() }
  }
  _addToProduct (item) {
    this.setState(state => {
      const selected = new Map(state.selected)
      if (selected.get(item.id)) {
        selected.delete(item.id)
      } else {
        selected.set(item.id, item)
      }
      this.props.onChange([...selected].map(pairs => pairs[1]))
      return { selected }
    })
  }
  _renderItem ({ item }) {
    return (
      <TouchableOpacity
        onPress={() => this._addToProduct(item)}
        style={{
          flexDirection: 'row',
          padding: 10,
          marginRight: 5,
          flex: 1,
          alignItems: 'center'
        }}>
        {this.state.selected.get(item.id) ? <Icons name='check' size={30} color='green' /> : null}
        <View style={{ marginRight: 10 }}>
          <Text style={{ textAlign: 'center', color: '#000' }}>{item.name}</Text>
          <Text style={{ color: '#000' }}>valor: ${item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={{ marginVertical: 10 }}>
        <FlatList
          style={{ flexGrow: 0, paddingVertical: 10, height: 100 }}
          data={this.props.options}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

ProductOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
