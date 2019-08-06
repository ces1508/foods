import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'
import Theme from '../Theme'

const mapStateToProps = state => ({ ...state.modal })
const mapDispatchToProps = {
  hideModal
}

const ModalWrapper = props => {
  return (
    <Modal style={styles.modal} {...props}>
      <Icons name='times-circle' size={50} style={styles.close} onPress={() => props.hideModal()} />
      <View style={styles.modal}>
        {props.children}
      </View>
    </Modal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    zIndex: 5,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
    color: Theme.colors.white
  }
})

ModalWrapper.propTypes = {
  visible: PropTypes.bool,
  transparent: PropTypes.bool,
  handleClose: PropTypes.func,
  animationType: PropTypes.oneOf(['slide', 'fade', 'none'])
}
ModalWrapper.defaultProps = {
  visible: false,
  transparent: true,
  handleClose: () => console.warn('sent prop handleClose to override'),
  animationType: 'slide'
}
