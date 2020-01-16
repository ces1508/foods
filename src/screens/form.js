import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from 'react-native'
import axios from 'axios'
import Select from '../components/select'
import Theme from '../Theme'
import { showMessage } from 'react-native-flash-message'
import { setShoppingCart } from '../ducks/shoppingCart'
import { connect } from 'react-redux'
const mapStateToProps = state => ({ products: state.shoppingCart.products })

const mapDispatchTopProps = { setShoppingCart }

class Form extends Component {
  constructor (props) {
    super(props)
    // this.placesRef = React.createRef()
    // this.citiesRef = React.createRef()
    this.keyboardHideListener = null
    this.keyboardShowListener = null
    this._onKeyboardHide = this._onKeyboardHide.bind(this)
    this._onKeyboardShow = this._onKeyboardShow.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      sending: false,
      observations: '',
      showButton: true,
      name: '',
      address: '',
      barrio: '',
      city: '',
      local: '',
      phone: '',
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
      selectedCity: 'neiva'
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
  async sendEmail () {
    let products = this.props.products
    
  }
  async handleSubmit () {
    const products = [...this.props.products].map(item => item[1])
    let { name, phone, barrio, address, observations, selectedCity, sending } = this.state
    if (sending) return null
    this.setState({ sending: true })
    if (!name || !phone || !barrio || !address) {
      return showMessage({
        type: 'error',
        icon: 'auto',
        message: 'Por favor completa todos los campos'
      })
    }
    let message = {
      icon: 'auto',
      type: 'success',
      hideStatusBar: true,
      message: `Tù pedido se ha procesado con èxito`
    }
    let data = {
      products,
      observations,
      user: { name, address, phone, barrio, city: selectedCity }
    }

    try {
      let request = await axios.post('http://ec2-13-52-104-177.us-west-1.compute.amazonaws.com/notify', data)
      this.setState({ sending: false })
      this.props.setShoppingCart([])
      this.props.navigation.navigate('tab')
    } catch (e) {
      this.setState({ sending: false })
      console.log('error ', e.response)
      message.type = 'error'
      message.message = 'lo sentimos estamos presentado problemas, por favor intanta mas tarde'
    }
    showMessage(message)
    // this.props.setShoppingCart([])
    // this.props.navigation.navigate('tab')
  }
  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Nombre:</Text>
            <TextInput
              allowFontScaling
              value={this.state.name}
              placeholder='nombre completo'
              onChangeText={text => this.setState({ name: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Barrio:</Text>
            <TextInput
              allowFontScaling
              value={this.state.barrio}
              placeholder='barrio'
              onChangeText={text => this.setState({ barrio: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>direción:</Text>
            <TextInput
              allowFontScaling
              value={this.state.address}
              placeholder='direción donde se recibira el pedido'
              onChangeText={text => this.setState({ address: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Telefono:</Text>
            <TextInput
              keyboardType='phone-pad'
              allowFontScaling
              value={this.state.phone}
              placeholder='Número de telefono'
              onChangeText={text => this.setState({ phone: text })}
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
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Observaciones:</Text>
            <TextInput
              multiline
              value={this.state.observations}
              label='Observaciones'
              returnKeyType='done'
              onChangeText={observations => this.setState({ observations, showButton: true })}
            />
          </View>
          {
            this.state.showButton
              ? <View style={styles.button}>
                <Text style={styles.buttonText} onPress={this.handleSubmit}>
                  { this.state.sending ? 'CREANDO ORDEN ....' : 'ORDENAR' }
                </Text>
              </View>
              : null
          }
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(() => mapStateToProps, mapDispatchTopProps)(Form)
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'column'
  },
  inputContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 5
  },
  button: {
    height: 50,
    backgroundColor: Theme.colors.secondary,
    width: '100%',
    zIndex: 10
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE',
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE',
    color: Theme.colors.text.secundary,
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontWeight: 'bold'
  }
})
