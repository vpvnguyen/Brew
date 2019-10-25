import React from 'react'
import { View, Text, StyleSheet, Button, Picker, StatusBar } from 'react-native'
import allCities from '../api/allCities'

// Hides unimportant warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['RCTRootView cancelTouches'])

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityLocations: [],
      pickerLocation: '',
      userLocation: undefined
    }
  }

  static navigationOptions = {
    title: 'Brew',
    headerStyle: {
      backgroundColor: '#2C1654',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }

  getAllCities = async () => {
    const response = await allCities.get('/')
    // picker location sets initial picker selector to the first city in the data set for display on button
    this.setState({
      cityLocations: response.data,
      pickerLocation: response.data[0]
    })
    console.log('City Locations', this.state.cityLocations)
  }

  componentDidMount() {
    this.getAllCities()
  }

  render() {

    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapperView}>

        <StatusBar barStyle="light-content" />

        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#FF6464" }}>
          <Button
            title="Use Current Location"
            onPress={() => navigate('MapScreen')}
            // if userlocation hasnt been changed from its default undfined value button is disabaled
            disabled={this.state.userLocation === undefined}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#FDBF50" }}>
          <Text style={{ alignSelf: "center" }}>or browse cities</Text>

          <Picker
            selectedValue={this.state.pickerLocation}
            onValueChange={(itemValue, itemIndex) => {
              // use the picker item index to set the new selected value to the index value of cityLocations
              // in state the picker index value correlates with cityLocations so this works
              this.setState({ pickerLocation: this.state.cityLocations[itemIndex] })
              console.log(this.state.pickerLocation, "picker location")
            }
              
            }>

            {this.state.cityLocations.map((element) => {
              return (
                <Picker.Item label={element.name} value={element} key={element.name} />
              )
            })}
          </Picker>
        </View>

        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#00BE65" }}>
          <Button
            title={`Go to ${this.state.pickerLocation.name}`}
            onPress={() => navigate('MapScreen', {
              locationName: this.state.pickerLocation.name,
              initialRegion: {
                latitude: this.state.pickerLocation.latitude,
                longitude: this.state.pickerLocation.longitude,
                latitudeDelta: 0.3,
                longitudeDelta: 0.3,
              }
            })}
          />
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  }
})

export default HomeScreen