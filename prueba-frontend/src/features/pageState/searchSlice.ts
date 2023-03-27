import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { toggleTypeToSearch } from '@app/interface/slices.interfaces'
import { Value } from 'sass';

const initialState: toggleTypeToSearch = {
    searchFilter : "hoteles"
}

export const searchSlice = createSlice({
    name : "isHotelSearch",
    initialState,
    reducers : {
        toggleSearch(state, action: PayloadAction<{ value: string }>){
            state.searchFilter = action.payload.value;
        }
    }
})  

export const fetchApi = createAsyncThunk("counterFetch", async (currentState:any)=>{

    const response = await fetch("dadasdasdasd.com")
    const parsedResponse = await response.json()
    return parsedResponse

})

export const {toggleSearch} = searchSlice.actions
export default searchSlice.reducer
