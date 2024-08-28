import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showProfile: false,
    showResponsive: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        hideShowProfile: (state) => {
            state.showProfile = false;
        },
        toggleShowProfile: (state) => {
            state.showProfile = !state.showProfile;
        },
        hideShowResponsive: (state) => {
            state.showResponsive = false;
        },
        toggleShowResponsive: (state) => {
            state.showResponsive = !state.showResponsive;
        },
    }
});

export const { toggleShowProfile, toggleShowResponsive, hideShowProfile, hideShowResponsive } = menuSlice.actions;


export default menuSlice.reducer;