import { roomInterface } from "@app/interface/general.interfaces";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/store";

interface RoomState {
    rooms: roomInterface[];
    selectedRoom: roomInterface | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: RoomState = {
    rooms: [],
    selectedRoom: null,
    status: "idle",
    error: null,
};

    const roomsSlice = createSlice({
        name: "rooms",
        initialState,
        reducers: {
            roomsRequested: (state) => {
                state.status = "loading";
            },
            roomsReceived: (state, action: PayloadAction<roomInterface[]>) => {
                state.rooms = action.payload;
                state.status = "succeeded";
            },
            roomsRequestFailed: (state, action: PayloadAction<string>) => {
                state.status = "failed";
                state.error = action.payload;
            },
            roomAdded: (state, action: PayloadAction<roomInterface>) => {
                state.rooms.push(action.payload);
            },
            roomUpdated: (state, action: PayloadAction<roomInterface>) => {
                const { id } = action.payload;
                const existingRoom = state.rooms.find((room) => room.id === id);
                if (existingRoom) {
                Object.assign(existingRoom, action.payload);
                }
            },
            roomDeleted: (state, action: PayloadAction<number>) => {
                const index = state.rooms.findIndex(
                (room) => room.id === action.payload
                );
                if (index !== -1) {
                state.rooms.splice(index, 1);
                }
            },
            roomSelected: (state, action: PayloadAction<number>) => {
                state.selectedRoom = state.rooms.find((room) => room.id === action.payload) || null;
            },
            roomDeselected: (state) => {
                state.selectedRoom = null;
            },
        },
    });

export const selectLastRoomId = createSelector(
    [(state: RootState) => state.rooms.rooms],
    (rooms) => {
        if (rooms.length === 0) {
        return 0;
        }
        return rooms[rooms.length - 1].id;
    }
    );

export const {
    roomsRequested,
    roomsReceived,
    roomsRequestFailed,
    roomAdded,
    roomUpdated,
    roomDeleted,
    roomSelected,
    roomDeselected,
} = roomsSlice.actions;

export default roomsSlice.reducer;