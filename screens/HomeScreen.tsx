import { View, SafeAreaView, Image } from "react-native";
import React, { FunctionComponent } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navslice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen: FunctionComponent = () => {
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{ uri: "https://links.papareact.com/gzs" }}
				/>
				<GooglePlacesAutocomplete
					placeholder="Where from"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
					fetchDetails={true}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details?.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null));
					}}
				/>
				<NavOptions />
				<NavFavourites/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
