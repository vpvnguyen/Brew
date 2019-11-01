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
            business_id: response.data[0].business_id,
            id: response.data[0].id,
            promotion_name: response.data[0].promotion_name,
            qtypeople: response.data[0].qtypeople,
            description: response.data[0].description,
            business_name: response.data[0].business_name,
            category_1: response.data[0].category_1,
            category_2: response.data[0].category_2,
            category_3: response.data[0].category_3,
            price: response.data[0].price,
            reviews: response.data[0].reviews,
            monday_hours: response.data[0].monday_hours,
            tuesday_hours: response.data[0].tuesday_hours,
            wednesday_hours: response.data[0].wednesday_hours,
            thursday_hours: response.data[0].thursday_hours,
            friday_hours: response.data[0].friday_hours,
            saturday_hours: response.data[0].saturday_hours,
            sunday_hours: response.data[0].sunday_hours,
            images: response.data[0].images
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
            <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: this.state.images }} />
            </View>

            <View style={styles.promotionView}>
                <Text style={styles.bigFont}>
                    Promotions
                </Text>
                <Text style={styles.promotionFont}>
                    {this.state.promotion_name}
                </Text>
                <Text style={styles.promotionFont}>
                    {this.state.description}
                </Text>
                <Text style={styles.promotionFont}>
                    Required Volume: {this.state.qtypeople} people
                </Text>

                </View>

            <View style={styles.infoView}>


            <Text style={styles.hoursTitleStyle}>Hours:</Text>
            <Text style={styles.hoursStyle}>
                Sunday: {this.state.sunday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
                Monday: {this.state.monday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
                Tuesday: {this.state.tuesday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
                Wednesday: {this.state.wednesday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
                Thursday: {this.state.thursday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
                Friday: {this.state.friday_hours}
            </Text>
            <Text style={styles.hoursStyle}>
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
        flex: 1
    },
    infoView: {
        flex: 1,
        alignItems: 'center'
    },
    promotionView: {
        flex: 1,
        alignItems: 'center'
    },
    bigFont: {
        fontSize: 33
    },
    promotionFont: {
        fontSize: 16
    },
    hoursStyle: {
        fontSize: 15
    },
    hoursTitleStyle: {
        fontSize: 20
    }
})

export default MoreInfo
