import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={ 1 } style={{ marginBottom: 20 }}>
            <View style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: "white",
            }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantItem;

const RestaurantImage = () => {
    return (
        <View>
            <Image source={{
                uri: "https://static.uc.ac.id/fikom/2022/12/Pic-1.jpg",
                height: 180,
            }} />
            <TouchableOpacity style={{
                position: "absolute",
                top: 20,
                right: 20,
            }}>
                <MaterialCommunityIcons name="heart-outline" size={ 25 } color="white" />
            </TouchableOpacity>
        </View>
    )
}

const RestaurantInfo = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}>
            <View style={{

            }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Title</Text>
                <Text style={{ fontSize: 14, color:"grey" }}>delivery time in minutes</Text>
            </View>
            <View style={{
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                backgroundColor: "#eee",
                borderRadius: 50,
            }}>
                <Text>4.5</Text>
            </View>
        </View>
    )
}