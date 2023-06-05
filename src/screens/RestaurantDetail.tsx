import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetail/About';

function RestaurantDetail() {
    return (
        <View style={{
            width: "100%"
        }}>
            <About />
            <Divider width={ 1.8 } style={{ marginVertical: 20 }} />
        </View>
    )
}

export default RestaurantDetail;