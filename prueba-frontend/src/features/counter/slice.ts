import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { UserStatus } from '@app/interface/slices.interfaces'

const initialState: UserStatus = {
    status: "active",
    userPermissions: "admin"
}

export const permissionsSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        changePermissions : (currentState) =>{
            currentState.userPermissions == "none"
        }
    }

})

export const fetchApi = createAsyncThunk("counterFetch", async (currentState:any)=>{

    const response = await fetch("dadasdasdasd.com")
    const parsedResponse = await response.json()
    return parsedResponse

})

export const {changePermissions} = permissionsSlice.actions
export default permissionsSlice.reducer
