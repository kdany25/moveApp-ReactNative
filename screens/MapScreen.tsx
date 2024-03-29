import { View, Text, TouchableOpacity } from "react-native";
import React, { FunctionComponent } from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import { createStackNavigator } from "@react-navigation/stack";
import RideOptionsCard from "../components/RideOptionsCard";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const MapScreen: FunctionComponent = () => {
	const Stack = createStackNavigator<RootStackParamList>();
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				//@ts-ignore
				onPress={() => navigation.navigate("HomeScreen")}
				style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
			>
				<Icon name="menu" />
			</TouchableOpacity>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;
