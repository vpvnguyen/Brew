import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import yelp from '../api/yelp'

class MoreInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            business_id: null,
            id: null,
            promotion_name: null,
            qtypeople: null,
            description: null,
            business_name: null,
            category_1: null,
            category_2: null,
            category_3: null,
            price: null,
            reviews: null,
            monday_hours: null,
            tuesday_hours: null,
            wednesday_hours: null,
            thursday_hours: null,
            friday_hours: null,
            saturday_hours: null,
            sunday_hours: null,
            images: null
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Promotions',
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
        const response = await yelp.get('')
        this.setState({
            business_id: response.data[1].business_id,
            id: response.data[1].id,
            promotion_name: response.data[1].promotion_name,
            qtypeople: response.data[1].qtypeople,
            description: response.data[1].description,
            business_name: response.data[1].business_name,
            category_1: response.data[1].category_1,
            category_2: response.data[1].category_2,
            category_3: response.data[1].category_3,
            price: response.data[1].price,
            reviews: response.data[1].reviews,
            monday_hours: response.data[1].monday_hours,
            tuesday_hours: response.data[1].tuesday_hours,
            wednesday_hours: response.data[1].wednesday_hours,
            thursday_hours: response.data[1].thursday_hours,
            friday_hours: response.data[1].friday_hours,
            saturday_hours: response.data[1].saturday_hours,
            sunday_hours: response.data[1].sunday_hours,
            images: response.data[1].images
        })
    }

    componentDidMount() {
        this.getAllPromotions()
    }

    render() {
        console.log(this.state, "state")
        return (
            <View style={{ flex: 1 }}>

            {this.state.business_id !== null && 

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>

                <View style={styles.imageView}>
            <Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={{ uri: this.state.images }} />
            </View>

            <View style={styles.promotionView}>
                <Text>
                    Promotions
                </Text>
                <Text style={styles.bigFont}>
                    {this.state.promotion_name}
                </Text>
                <Text style={styles.bigFont}>
                    {this.state.description}
                </Text>
                <Text style={styles.bigFont}>
                    Required Volume: {this.state.qtypeople} people
                </Text>

                </View>

            <View style={styles.infoView}>


            <Text>Hours:</Text>
            <Text>
                Sunday: {this.state.sunday_hours}
            </Text>
            <Text>
                Monday: {this.state.monday_hours}
            </Text>
            <Text>
                Tuesday: {this.state.tuesday_hours}
            </Text>
            <Text>
                Wednesday: {this.state.wednesday_hours}
            </Text>
            <Text>
                Thursday: {this.state.thursday_hours}
            </Text>
            <Text>
                Friday: {this.state.friday_hours}
            </Text>
            <Text>
            Saturday: {this.state.saturday_hours}
            </Text>
            </View>

            </View>    

            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        justifyContent: 'center'
    },
    infoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    promotionView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigFont: {
        fontSize: 22
    }
})

export default MoreInfo
