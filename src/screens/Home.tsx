import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

function Home(){

	return (
		<SafeAreaView style={{
			backgroundColor: "#eee",
			flex: 1,
			width: "100%",
		}}>
			<View style={{
				backgroundColor: "white",
				padding: 15,
				alignItems: "center",
			}}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={ false } >
				<Categories />
				<RestaurantItem />
				<RestaurantItem />
				<RestaurantItem />
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home;