import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Brew',
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
    // GeoLocation button needs to get coordinates, then get city of coordinates and pass to the map screen
    // In this format
    // {
    //     locationName: this.state.pickerLocation.name,
    //     initialRegion: {
    //       latitude: this.state.pickerLocation.latitude,
    //       longitude: this.state.pickerLocation.longitude,
    //       latitudeDelta: 0.1,
    //       longitudeDelta: 0.1,
    //     }
    //   }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, backgroundColor: '#ECEDE3' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../images/brew.png')} />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigate('SelectorScreen')}
                        color="#FFAD00"
                        style={{ backgroundColor: '#FFAD00', marginHorizontal: 30, marginBottom: 20 }}
                    >
                        <Text style={{ textAlign: 'center', padding: 10, color: '#ECEDE3', fontSize: 18 }}>Discover</Text>
                    </TouchableOpacity>
                    <Button
                        title={`Or Use Current Location`}
                        onPress={() => navigate('MapScreen')}
                    />
                </View>
            </View>
        )
    }
}

export default HomeScreen
