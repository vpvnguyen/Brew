import React from 'react'
import { View, Text, StyleSheet, Button, Picker } from 'react-native'
import allCities from '../api/allCities'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityLocations: [],
      pickerLocation: ''
    }
  }

  static navigationOptions = {
    title: 'HomeScreen',
  }

  getAllCities = async () => {
    const response = await allCities.get('/')
    // picker location sets initial picker selector to the first city in the data set for display on button
    this.setState({
      cityLocations: response.data,
      pickerLocation: response.data[0].name
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

        <View style={{ flex: 3, justifyContent: "space-around" }}>
          <Button
            title="Current Location"
            onPress={() => navigate('MapView')}
          />
        </View>

        <View style={{ flex: 3, justifyContent: "space-around", alignItems: "center"}}>
          <Text>or</Text>
        </View>

        <View style={{ flex: 3, justifyContent: "space-around" }}>
          <Picker
            selectedValue={this.state.language}
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

        <View style={{ flex: 3, justifyContent: "space-around" }}>
          <Button
            title={`Go to ${this.state.pickerLocation}`}
            onPress={() => navigate('MapView')}
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