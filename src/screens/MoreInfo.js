import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class MoreInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('business').name,
            headerStyle: {
                backgroundColor: '#2C1654',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    }

    render() {
        const { navigation } = this.props
        const business = navigation.getParam('business')
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text>{business.name}</Text>
                    <Text>{business.address}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Title: {business.promotion[0]}</Text>
                    <Text>Required volume: {business.promotion[1]}</Text>
                    <Text>Promo: {business.promotion[2]}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default MoreInfo