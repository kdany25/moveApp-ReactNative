import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";

const MapScreen = () => {
	return (
		<View>
			<Text>Here is the map stuff</Text>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}></View>
		</View>
	);
};

export default MapScreen;
