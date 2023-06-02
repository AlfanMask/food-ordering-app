import React from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import { View, Image, Text } from "react-native";

type Item = {
    image: ImageSourcePropType,
    text: string,
}

const items: Array<Item> = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-Up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffe & Tea"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
]

function Categories(){

    return (
        <View style={{
            marginTop: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            backgroundColor: "white",
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
                { items.map((item, i) => {
                    return (
                        <View key={ i } style={{
                            marginRight: 30
                        }}>
                            <Image source={ item.image } style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                            }} />
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "900",
                            }}>{ item.text }</Text>
                        </View>
                    )
                }) }
            </ScrollView>
        </View>
    )
}

export default Categories;