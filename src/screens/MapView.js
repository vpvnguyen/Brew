import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MapView extends React.Component {
    constructor(props) {
        super(props)
    }
     
    static navigationOptions = {
        title: 'MapView',
      }

      render() {
          return (
              <View>
                  <Text>
                      Map View
                  </Text>
              </View>
          )
      }

}

const styles = StyleSheet.create({})

export default MapView