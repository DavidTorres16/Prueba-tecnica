import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { selectedItem, toggleTypeToSearch } from '@app/interface/slices.interfaces'
import { dataInterface } from '@app/interface/general.interfaces';

const initialState: selectedItem = {
    
}

export const selectedItemSlice = createSlice({
    name : "selectedItem",
    initialState,
    reducers : {
        SelectItem(state, action: PayloadAction<{ value: dataInterface }>){
            state.selected = action.payload.value;
        },
        ResetItem(state) {
            state.selected = undefined;
        }
    }
})  

export const fetchApi = createAsyncThunk("counterFetch", async (currentState:any)=>{

    const response = await fetch("dadasdasdasd.com")
    const parsedResponse = await response.json()
    return parsedResponse

})

export const {SelectItem} = selectedItemSlice.actions
export const {ResetItem} = selectedItemSlice.actions
export default selectedItemSlice.reducer
