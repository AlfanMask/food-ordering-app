import React, { useState } from "react";
import { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles";

interface Props {
	activeTab: string,
	setActiveTab: (value: string) => void,
}

function HeaderTabs(props: Props){
	return (
		<View style={{
			flexDirection: "row",
			alignItems: "center",
		}}>
			<HeaderButton text="Delivery" activeTab={ props.activeTab } setActiveTab={ props.setActiveTab } />
			<HeaderButton text="Pickup" activeTab={ props.activeTab } setActiveTab={ props.setActiveTab } />
		</View>
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