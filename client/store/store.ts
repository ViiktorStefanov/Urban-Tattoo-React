import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import tattooReducer from './tattooSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tattoo: tattooReducer,
    menu: menuReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
