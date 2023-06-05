import React from 'react'
import { View, Text, Image } from 'react-native'

function About() {

    const dummyImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG"
    const dummyTitle = "Farmhouse Kithcen Thai Cuisine";
    const dummyDescription = "lorem ipsum sir demet sir amet lorem ipsum sir demet sir amet";

    return (
        <View>
            <RestaurantImage src={ dummyImage } />
            <RestaurantTitle title={ dummyTitle } />
            <RestaurantDescription desc={ dummyDescription } />
        </View>
    )
}

export default About;

interface ImgProps {
    src: string,
}

const RestaurantImage = (props: ImgProps) => (
    <Image source={{ uri: props.src }} style={{
        width: "100%",
        height: 180,
    }} />
)

interface TitleProps {
    title: string,
}

const RestaurantTitle = (props: TitleProps) => (
    <Text style={{
        fontSize: 28,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        { props.title }
    </Text>
)

interface DescProps {
    desc: string,
}

const RestaurantDescription = (props: DescProps) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        { props.desc }
    </Text>
)