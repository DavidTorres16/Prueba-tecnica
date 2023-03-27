import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { toggleActionType, toggleTypeToSearch } from '@app/interface/slices.interfaces'

const initialState: toggleActionType = {
    actionType : ""
}

export const actionSlice = createSlice({
    name : "action",
    initialState,
    reducers : {
        toggleAction(state, action: PayloadAction<{ value: string }>){
            state.actionType = action.payload.value;
        }
    }
})  

export const fetchApi = createAsyncThunk("counterFetch", async (currentState:any)=>{

    const response = await fetch("dadasdasdasd.com")
    const parsedResponse = await response.json()
    return parsedResponse

})

export const {toggleAction} = actionSlice.actions
export default actionSlice.reducer