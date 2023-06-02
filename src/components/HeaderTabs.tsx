import React, { useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import styles from "../styles";

function HeaderTabs(){
	const [activeTab, setactiveTab] = useState<string>("Delivery")

	return (
		<SafeAreaView style={{
			paddingTop: 48,
			flexDirection: "row",
			alignItems: "center",
		}}>
			<HeaderButton text="Delivery" activeTab={ activeTab } setActiveTab={ setactiveTab } />
			<HeaderButton text="Pickup" activeTab={ activeTab } setActiveTab={ setactiveTab } />
		</SafeAreaView>
	)
}

export default HeaderTabs;

interface HeaderButtonProps {
	text: string,
	activeTab: string,
	setActiveTab: (tab: string) => void,
}

const HeaderButton = (props: HeaderButtonProps) => {
	const isActive = props.activeTab === props.text;

	return (
		<View>
			<TouchableOpacity style={{
				backgroundColor: isActive ? "black" : "rgba(0,0,0,0)",
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30
			}}
			onPress={ () => { props.setActiveTab(props.text) } }
			>
				<Text style={{
					color: isActive ? "white" : "black",
					fontSize: 15,
					fontWeight: "900",
				}}>{ props.text }</Text>
			</TouchableOpacity>
		</View>
	)
}