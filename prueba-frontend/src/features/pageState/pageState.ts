import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { toggleTypeToSearch } from '@app/interface/slices.interfaces'

const initialState: toggleTypeToSearch = {
    isHotelSearch : true
}

export const searchSlice = createSlice({
    name : "isHotelSearch",
    initialState,
    reducers : {
        toggleSearch: state => {
            state.isHotelSearch = !state.isHotelSearch;
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
