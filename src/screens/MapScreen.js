import React from 'react'
import { View, StyleSheet, StatusBar, Text, Button } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import promotions from '../api/promotions'
import toTitleCase from '../functions/TitleCase'

class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            promotions: []
        }
    }

    //Header style with paramaters from navigation
    static navigationOptions = ({ navigation }) => {
        return {
            title: toTitleCase(navigation.getParam('locationName')),
            headerStyle: {
                backgroundColor: '#FFAD00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    }

    getAllPromotions = async () => {
        const { navigation } = this.props
        const city = navigation.getParam('locationName')
        const response = await promotions.get(`/${city}`)
        // picker location sets initial picker selector to the first city in the data set for display on button
        this.setState({
            promotions: response.data
        })
        console.log(this.state, "promotions this state")
    }

    componentDidMount() {
        this.getAllPromotions()
    }

    render() {
        const { navigate } = this.props.navigation
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={navigation.getParam('initialRegion')}
                >
                    {this.state.promotions !== 0 && this.state.promotions.map((business, i) => {
                        return (
                            <Marker
                                key={i}
                                coordinate={{
                                    latitude: business.latitude,
                                    longitude: business.longitude
                                }}
                                title={business.name}
                                description={business.address}
                            >
                                <Callout
                                onPress={() => navigate('MoreInfo', {
                                    business
                                })}
                                >
                                    <View style={styles.callout}>
                                        <Text style={{ fontSize: 17 }}>{business.name}</Text>
                                        <Text>{business.address}</Text>
                                        <Button
                                            title="Promotions"
                                        />
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })}
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
    },
    callout: {
        width: 250,
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default MapScreen
