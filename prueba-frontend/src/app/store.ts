import {configureStore,ThunkAction, Action} from '@reduxjs/toolkit'
import searchSlice from '@features/pageState/searchSlice';
import permissionsSlice from '@features/counter/slice';
import themeSlice from '@features/theme/themeSlice';

export const store = configureStore({
    reducer:{
        user : permissionsSlice,
        search : searchSlice,
        theme: themeSlice
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

