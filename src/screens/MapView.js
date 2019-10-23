import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MapView extends React.Component {
    constructor(props) {
        super(props)
    }

    //Header style with paramaters from navigation
    static navigationOptions = ({ navigation }) => {
        const location = navigation.getParam('locationName')
        return {
          title: location,
          headerStyle: {
            backgroundColor: '#ffffff'
          }
        }
      }   

    render() {

        const { navigation } = this.props

        console.log(navigation.getParam('locationName'))
        console.log("Passed Paramaters", )


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