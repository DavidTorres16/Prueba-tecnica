import {configureStore,ThunkAction, Action} from '@reduxjs/toolkit'
import searchSlice from '@features/pageState/pageState';
import counterReducer from '@features/counter/slice';

export const store = configureStore({

    reducer:{
        counter : counterReducer,
        search : searchSlice,
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

