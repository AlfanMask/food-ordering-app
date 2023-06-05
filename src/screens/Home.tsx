import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, View } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

function Home(){
	const [restaurantData, setrestaurantData] = useState<Array<any>>(localRestaurants);
	const [city, setcity] = useState<string>("");
	const [activeTab, setactiveTab] = useState<string>("Delivery");

	const YELP_API_KEY = "";

	const getRestaurantFromYelp = async () => {
		const yepUrl = `https://.../${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			}
		}

		try {
			const response = await fetch(yepUrl, apiOptions);
			const data = await response.json();
			setrestaurantData(data.businesses.filter((business: any) => business.transactions.includes(activeTab.toLocaleLowerCase())));
		} catch (error) {
			// Handle any errors that occur during the fetch or JSON parsing
			console.error(error);
		}
	}

	useEffect(() => {
		// TODO: YELP API, cannot signup currently
		// getRestaurantFromYelp();
	}, [city, activeTab]);

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
				<HeaderTabs activeTab={ activeTab } setActiveTab={ setactiveTab } />
				<SearchBar setcity={ setcity } />
			</View>
			<ScrollView showsVerticalScrollIndicator={ false } >
				<Categories />
				<RestaurantItems restaurantData={ restaurantData } />
			</ScrollView>
			<Divider width={ 1 } />
			<BottomTabs />
		</SafeAreaView>
	)
}

export default Home;