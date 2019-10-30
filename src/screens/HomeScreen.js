import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Geolocation from 'react-native-geolocation-service';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: undefined,
            loading: undefined
        }
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

    hasLocationPermission = async () => {
        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
          return true;
        }
    
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    
        if (hasPermission) return true;
    
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    
        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
    
        if (status === PermissionsAndroid.RESULTS.DENIED) {
          ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        }
    
        return false;
      }

    // Instead of navigator.geolocation, just use Geolocation.
    getLocation = async () => {
        const hasLocationPermission = await this.hasLocationPermission();
    
        if (!hasLocationPermission) return;
    
        this.setState({ loading: true }, () => {
          Geolocation.getCurrentPosition(
            (position) => {
              this.setState({ location: position, loading: false });
              console.log(position);
            },
            (error) => {
              this.setState({ location: error, loading: false });
              console.log(error);
            },
            { enableHighAccuracy: true, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
          );
        });
      }

    componentDidMount() {
        this.getLocation()
    }

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
                        // if userlocation hasnt been changed from its default undfined value button is disabaled
                        disabled={this.state.userLocation !== undefined}
                    />
                </View>
            </View>
        )
    }
}

export default HomeScreen
