import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import allCities from '../api/allCities'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityLocations: []
        }
    }

    static navigationOptions = {
        title: 'HomeScreen',
      }

    getAllCities = async () => {
        const response = await allCities.get('/')
        this.setState({
          cityLocations: response.data
        })
        // console.log(response.data, 'Response')
        console.log('City Locations', this.state.cityLocations)
      }

      componentDidMount() {
          console.log('comp did mount')
        this.getAllCities()
      }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <Text>HomeScreen</Text>
                <Button
                title="Map View"
                onPress={() => this.props.navigation.navigate('MapView')}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({})

export default HomeScreen