import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import { UserStatus } from '@app/interface/slices.interfaces'

const initialState: UserStatus = {
    status: "active",
    userPermissions: "admin"
}

export const permissionsSlice = createSlice({
    name : "permissions",
    initialState,
    reducers : {
        changePermissions : (currentState, action: PayloadAction<{ value: UserStatus }>) =>{
            currentState.userPermissions == action.payload.value.userPermissions;
            currentState.status == action.payload.value.status
            currentState.user == action.payload.value.user
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
