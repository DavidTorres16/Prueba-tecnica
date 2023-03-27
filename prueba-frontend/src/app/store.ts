import {configureStore,ThunkAction, Action} from '@reduxjs/toolkit'
import searchSlice from '@features/pageState/searchSlice';
import permissionsSlice from '@features/counter/slice';
import themeSlice from '@features/theme/themeSlice';
import actionSlice from '@features/pageState/ActionSlice';
import selectedItemSlice from '@features/pageState/SelectedItemSlice';
import roomSlice from '@features/pageState/roomSlice';

export const store = configureStore({
    reducer:{
        user : permissionsSlice,
        search : searchSlice,
        theme: themeSlice,
        action: actionSlice,
        selected: selectedItemSlice,
        rooms: roomSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

