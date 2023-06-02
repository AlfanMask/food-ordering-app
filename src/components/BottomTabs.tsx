import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, Text, TouchableOpacity } from 'react-native'

function BottomTabs() {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            paddingHorizontal: 30,
        }}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Search" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}

export default BottomTabs;

interface IconProps {
    icon: string,
    text: string,
}

const Icon = (props: IconProps) => {
    return (
        <TouchableOpacity>
            <FontAwesome5
                name={ props.icon }
                size={ 25 }
                style={{
                    marginBottom: 2,
                    alignSelf: "center",
                }}
            />
            <Text>{ props.text }</Text>
        </TouchableOpacity>
    )
}