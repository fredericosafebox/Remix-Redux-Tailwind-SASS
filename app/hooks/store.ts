import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import counter from '~/reducers/counterSlice';

// INSERT REDUCERS HERE
export const store = configureStore({
  reducer: {
    counter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
