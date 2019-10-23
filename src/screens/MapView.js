import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MapView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
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

        console.log('state', this.state)

        return (
            <View>
                <Text>
                    Map View
                  </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({})

export default MapView