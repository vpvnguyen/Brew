import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {},
            coords: {}
        }
    }

    componentDidMount() {
        const { navigation } = this.props

        this.setState({
            location: navigation.getParam('locationName'),
            coords: navigation.getParam('initialRegion')
        })
    }

    //Header style with paramaters from navigation
    static navigationOptions = () => {
        return {
            title: this.state.location,
            headerStyle: {
                backgroundColor: '#ffffff'
            }
        }
    }

    render() {

        console.log('Coords', this.state.coords)

        return (
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={this.state.coords}
              >
              </MapView>
            </View>
         )
    }

}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    }
   })

export default MapScreen

// import React from 'react'
// import { View, StyleSheet, Text } from 'react-native'

// class MapScreen extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <View>
//                 <Text>Bro</Text>
//             </View>
//         )
//     }
// }

// export default MapScreen
