import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet
} from 'react-native'
import Category from '../components/category'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ ...state.categories })

class CategoriesScreen extends Component {
  render () {
    return (
      <FlatList
        style={styles.list}
        keyExtractor={item => item.id.toString()}
        data={this.props.categories}
        renderItem={({ item }) => <Category category={item} navigation={this.props.navigation} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10
  }
})

export default connect(mapStateToProps)(CategoriesScreen)
