import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { InitialState } from 'app/interface/slices.interfaces'

const initialState: InitialState = {
    value : 1 
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        incrementState : (currentState) =>{
            currentState.value += 1
        }
    }

})

export const fetchApi = createAsyncThunk("counterFetch", async (currentState:any)=>{

    const response = await fetch("dadasdasdasd.com")
    const parsedResponse = await response.json()
    return parsedResponse

})

export const {incrementState} = counterSlice.actions
export default counterSlice.reducer
