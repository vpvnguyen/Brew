import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Welcome',
      }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({})

export default HomeScreen