import { ThemeInterface } from "@app/interface/slices.interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeInterface = {
    theme: 'default'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.theme == 'dark' ? state.theme = 'default' : state.theme = 'dark'   
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer