import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class MapScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    //Header style with paramaters from navigation
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('locationName'),
            headerStyle: {
                backgroundColor: '#2C1654',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={navigation.getParam('initialRegion')}
                >
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default MapScreen
