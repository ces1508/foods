import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
import Select from '../components/select'

export default class Form extends Component {
  constructor (props) {
    super(props)
    // this.placesRef = React.createRef()
    // this.citiesRef = React.createRef()
    this.keyboardHideListener = null
    this.keyboardShowListener = null
    this._onKeyboardHide = this._onKeyboardHide.bind(this)
    this._onKeyboardShow = this._onKeyboardShow.bind(this)
    this.state = {
      showButton: true,
      name: '',
      addres: '',
      barrio: '',
      city: '',
      local: '',
      cities: [
        {
          label: 'Neiva',
          value: 'neiva'
        },
        {
          label: 'Garzon',
          value: 'garzon'
        }
      ],
      selectedCity: 'neiva',
      places1: [
        { label: 'Place 1', value: '1', key: '1' },
        { label: 'Place 2', value: '2', key: '2' },
        { label: 'Place 3', value: '3', key: '3' }
      ],
      places2: [
        { label: 'Place 4', value: '4', key: '4' }
      ],
      selectedPlace: ''
    }
  }
  componentDidMount () {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this._onKeyboardShow)
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this._onKeyboardHide)
  }
  componentWillUnmount () {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }
  _onKeyboardShow () {
    this.setState({ showButton: false })
  }
  _onKeyboardHide () {
    this.setState({ showButton: true })
  }
  renderPlaces () {
    if (this.state.selectedCity) {
      let places = this.state.selectedCity === 'neiva' ? this.state.places1 : this.state.places2
      return (
        <Select
          style={styles.inputContainer}
          label='Seleciona la tienda mas cercana'
          options={places}
          handleChange={value => this.setState({ selectedPlace: value })}
          value={this.state.selectedPlace}
        />
      )
    }
  }
  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='height' enabled>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text>Nombre:</Text>
            <TextInput
              allowFontScaling
              value={this.state.name}
              placeholder='nombre completo'
              onChangeText={text => this.setState({ name: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Barrio:</Text>
            <TextInput
              allowFontScaling
              value={this.state.barrio}
              placeholder='barrio'
              onChangeText={text => this.setState({ barrio: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>direción:</Text>
            <TextInput
              allowFontScaling
              value={this.state.addres}
              placeholder='direción donde se recibira el pedido'
              onChangeText={text => this.setState({ address: text })}
            />
          </View>
          <Select
            style={styles.inputContainer}
            label='Seleciona tu ciudad'
            selectedValue={this.state.selectedCity}
            options={this.state.cities}
            value={this.state.selectedCity}
            handleChange={value => {
              this.setState({ selectedCity: value })
            }}
          />
          {this.renderPlaces()}
        </ScrollView>
        {
          this.state.showButton
            ? <View style={{ height: 50, backgroundColor: 'yellow', width: '100%', zIndex: 10 }}>
              <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: 'bold' }}>
                ORDENAR
              </Text>
            </View>
            : null
        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    flex: 1
  },
  inputContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 5
  }
})
