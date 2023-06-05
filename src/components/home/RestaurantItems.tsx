import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Product = {
  name: string;
  image_url: string;
  categories: Array<string>;
  price: string;
  reviews: number;
  rating: number;
};

export const localRestaurants: Array<Product> = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

interface Props {
    restaurantData: Array<any>
}

function RestaurantItems(props: Props) {
  return (
    <>
      {localRestaurants.map((restaurant, i) => {
        return (
          <TouchableOpacity key={i} activeOpacity={0.5} style={{ marginBottom: 20 }}>
            <View
              style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: "white",
              }}
            >
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

export default RestaurantItems;

interface RestaurantImageProps {
  image: string;
}

const RestaurantImage = (props: RestaurantImageProps) => {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
          height: 180,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

interface RestaurantInfoProps {
  name: string;
  rating: number;
}

const RestaurantInfo = (props: RestaurantInfoProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{}}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 14, color: "grey" }}>
          delivery time in minutes
        </Text>
      </View>
      <View
        style={{
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          backgroundColor: "#eee",
          borderRadius: 50,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
