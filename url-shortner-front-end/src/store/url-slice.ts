import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
    name: "url",
    initialState: {
        generatedUrl: "",
        createdAt: new Date().toString()
    },
    reducers: {
        updateUrl: (state, action: PayloadAction<string>) => {
            state.generatedUrl = action.payload;
            state.createdAt = new Date().toString();
        },
    }
});

export const url = urlSlice.reducer;
export const { updateUrl } = urlSlice.actions;