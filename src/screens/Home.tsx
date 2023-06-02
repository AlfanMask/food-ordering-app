import React from "react";
import { SafeAreaView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
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
			<Categories />
		</SafeAreaView>
	)
}

export default Home;