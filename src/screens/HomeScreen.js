import React from 'react'
import { View, Text, StyleSheet, Button, Picker } from 'react-native'
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
    title: 'TurntUp',
    headerStyle: {
      backgroundColor: '#2C1654',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
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
    console.log('comp did mount')
    this.getAllCities()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapperView}>

        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#FF6464" }}>
          <Button
            title="Use Current Location"
            onPress={() => navigate('MapScreen')}
            // if userlocation hasnt been changed from its default undfined value button is disabaled
            disabled={this.state.userLocation === undefined}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: "#FDBF50" }}>
          <Text style={{alignSelf: "center"}}>or browse cities</Text>
          <Picker
            // do we need selected value prop here?
            // selectedValue={this.state.cityLocations[0].name}


            // callback changes the value of state for dynamic button
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ pickerLocation: itemValue })
            }>
            {this.state.cityLocations.map((element) => {
              return (
                <Picker.Item label={element.name} value={element.name} key={element.name} />
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
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
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