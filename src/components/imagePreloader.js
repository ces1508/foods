import React, { PureComponent } from 'react'
import { Image, ActivityIndicator, View } from 'react-native'
import Theme from '../Theme'

export default class ImageWithPreload extends PureComponent {
  state = {  // eslint-disable-line
    isLoaded: false
  }
  render () {
    let { isLoaded } = this.state
    return (
      <View style={{ maxHeight: 150, justifyContent: 'center', alignItems: 'center', ...this.props.style }}>
        <Image {...this.props} onLoad={() => this.setState({ isLoaded: true })} style={this.state.isLoaded ? this.props.style : { width: 1, height: 1, }} />
         {this.state.isLoaded ? null : <ActivityIndicator size='large' color={Theme.colors.secondary} />}
      </View>
  )
  }
}
