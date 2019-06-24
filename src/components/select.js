import React from 'react'
import {
  Picker,
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

const CustomPicker = props => {
  return (
    <View style={[{ marginBottom: 5 }, props.style]}>
      <Text>{props.label}</Text>
      <Picker
        selectedValue={props.value}
        mode={props.mode}
        onValueChange={props.handleChange}>
        {
          props.options.map(item => (
            <Picker.Item
              label={item.label || item.name}
              value={item.name || item.value}
              key={item.id || item.value}
            />
          ))
        }
      </Picker>
    </View>
  )
}

CustomPicker.propTypes = {
  mode: PropTypes.oneOf(['dialog', 'dropdown']).isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

CustomPicker.defaultProps = {
  mode: 'dialog',
  options: [],
  handleChange: (value, index) => console.log(`the current value is ${value} at index ${index}`)
}

export default CustomPicker
