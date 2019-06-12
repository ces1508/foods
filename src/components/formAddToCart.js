import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Theme from '../Theme'
import Quantity from 'react-native-numeric-input'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'

const mapDispatchToProps = {
  hideModal
}

const Form = props => (
  <View style={{ backgroundColor: '#fff', padding: 15, alignItems: 'center', borderRadius: 5 }}>
    <Text style={{ fontSize: 20, color: Theme.colors.title, marginBottom: 15 }}>
      ¿Cuantos deseas?
    </Text>
    <Quantity step={1} />
    <TouchableOpacity onPress={() => props.hideModal()} style={{ borderRadius: 5, padding: 10, borderWidth: 1, marginTop: 15 }}>
      <Text>Agregar</Text>
    </TouchableOpacity>
  </View>
)

export default connect(() => ({}), mapDispatchToProps)(Form)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    color: Theme.colors.title,
    marginBottom: 15
  },
  button: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginTop: 15
  }
})
