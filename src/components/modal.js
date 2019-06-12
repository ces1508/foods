import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'

const mapStateToProps = state => ({ ...state.modal })
const mapDispatchToProps = {
  hideModal
}

const ModalWrapper = props => {
  return (
    <Modal style={styles.modal} {...props}>
      <View style={styles.modal}>
        <Icons name='times-circle' size={50} style={styles.close} onPress={() => props.hideModal()} />
        {props.children}
      </View>
    </Modal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 0
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
