import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});

type Food = {
  title: string;
  desc: string;
  price: number;
  img: string;
};

function MenuItems() {
  const dummyFoods: Array<Food> = [
    {
      title: "Pizza",
      desc: "Delicious pizza topped with various ingredients",
      price: 10,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Burger",
      desc: "Juicy burger served with fries",
      price: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Pasta",
      desc: "Classic pasta dish with a savory sauce",
      price: 12,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Salad",
      desc: "Fresh and healthy salad with mixed greens",
      price: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Sushi",
      desc: "Assortment of sushi rolls with soy sauce",
      price: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Steak",
      desc: "Juicy steak cooked to perfection",
      price: 18,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Fish and Chips",
      desc: "Crispy battered fish with a side of fries",
      price: 10,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Tacos",
      desc: "Authentic Mexican tacos filled with flavorful ingredients",
      price: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Curry",
      desc: "Spicy and aromatic curry with rice",
      price: 14,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
    {
      title: "Ice Cream",
      desc: "Assorted flavors of creamy ice cream",
      price: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={ false }>
      { dummyFoods.map((food, i) => (
            <>
            <View key={ i } style={ styles.menuItemStyle }>
                <FoodInfo key={ i } title="food title" desc="lorem ipsum sir demet" price={10} />
                <FoodImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG/1200px-Soto_Ayam_Savoy_Homann_Hotel.JPG" />
            </View>
            <Divider width={ 0.5 } orientation="vertical" />
            </>
          )
      ) }
    </ScrollView>
  );
}

export default MenuItems;

interface InfoProps {
  title: string;
  desc: string;
  price: number;
}

const FoodInfo = (props: InfoProps) => (
  <View
    style={{
      justifyContent: "space-evenly",
    }}
  >
    <Text style={{ fontSize: 24, fontWeight: "600" }}>{props.title}</Text>
    <Text>{props.desc}</Text>
    <Text>{`$ ${props.price}`}</Text>
  </View>
);
interface ImageProps {
  src: string;
}

const FoodImage = (props: ImageProps) => (
  <Image
    source={{ uri: props.src }}
    style={{
      width: 80,
      height: 80,
      borderRadius: 8,
    }}
  />
);
