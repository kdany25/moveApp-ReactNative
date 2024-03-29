import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
};

export const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelInformation: (state, action) => {
			state.travelTimeInformation = action.payload;
		},
	},
});

export const { setOrigin, setDestination, setTravelInformation } =
	navSlice.actions;

export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelInformation = (state: any) =>
	state.nav.travelTimeInformation;

export default navSlice.reducer;
