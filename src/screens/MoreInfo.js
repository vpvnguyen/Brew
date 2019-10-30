import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

class MoreInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yelp: undefined
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('business').name,
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

    getAllPromotions = async () => {
        const { navigation } = this.props
        let businessName = navigation.getParam('business')
        businessName = businessName.name.split(' ').join('+')
        console.log(businessName, "business name")
        let city = navigation.getParam('city')
        city = city.split(' ').join('+')
        console.log(city, "city")
        const response = await yelp.get(`/${businessName}/${city}`)
        // picker location sets initial picker selector to the first city in the data set for display on button
        this.setState({
            yelp: response.data
        })
        console.log(this.state, "promotions this state")
    }

    componentDidMount() {
        this.getAllPromotions()
    }

    render() {
        const { navigation } = this.props
        console.log("Business", navigation.getParam('business',))
        console.log("City", navigation.getParam('city'))
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