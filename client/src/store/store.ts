import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import tattooReducer from './tattooSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tattoo: tattooReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
