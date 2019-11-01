import React from 'react'
import { View, Text, StyleSheet, Button, Picker, StatusBar, TouchableOpacity, Image } from 'react-native'
import allCities from '../api/allCities'
import toTitleCase from '../functions/TitleCase'

// Hides unimportant warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['RCTRootView cancelTouches'])

class SelectorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityLocations: [],
      pickerLocation: ''
    }
  }

  static navigationOptions = {
    title: 'Discover',
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

        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#ECEDE3" }}>

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
                <Picker.Item label={toTitleCase(element.name)} value={element} key={element.name} />
              )
            })}
          </Picker>

          <TouchableOpacity
            onPress={() => navigate('MapScreen', {
              locationName: this.state.pickerLocation.name,
              initialRegion: {
                latitude: this.state.pickerLocation.latitude,
                longitude: this.state.pickerLocation.longitude,
                latitudeDelta: 0.08,
                longitudeDelta: 0.08,
              }
            })}
            color="#FFAD00"
            style={{ backgroundColor: '#FFAD00', marginHorizontal: 30, marginBottom: 20 }}
          >
            <Text style={{ textAlign: 'center', padding: 10, color: '#ECEDE3', fontSize: 18 }}>{`Brew!`}</Text>
          </TouchableOpacity>

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

export default SelectorScreen