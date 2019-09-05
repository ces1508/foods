import React, { PureComponent } from 'react'
import {
  View,
  Text,
  FlatList,
  Linking,
  Platform
} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import db from '../mocks/db'
export default class LocationsScreens extends PureComponent {
  handlePress (position) {
    let { OS } = Platform 
    let { lat, long} = position
    if (OS === 'android') {
      url = `https://maps.google.com/?daddr=${lat},${long}`
    } else {
      url = `http://maps.apple.com/?daddr=${lat},${long}`
    }
    Linking.openURL(url)
  }
  render () {
    return (
      <View style={{ marginTop: 50, marginHorizontal: 15 }}>
        <Text
          style={{
            fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE',
            color: '#fff',
            marginBottom: 15
          }}
        >
          En sesamo contamos con multiples sedes para acercar nuestros productos a todas las personas
        </Text>
        <FlatList 
          data={db.locations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ 
              backgroundColor: '#fff', 
              marginBottom: 20, 
              paddingVertical: 20,
              borderRadius: 10,
              paddingHorizontal: 10
            }}>
              <Text style={{
                fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE'
              }}>{item.name}</Text>
              <View style={{
                display: "flex",
                flexDirection: 'row',
                alignItems:'center'
              }}>
                <Text
                  onPress={() => this.handlePress(item.position)} 
                  style={{
                  color: '#000',
                  marginRight: 20
                }}>obtener indicaciones</Text>
                <Icons name='crosshairs-gps' size={30} />
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}