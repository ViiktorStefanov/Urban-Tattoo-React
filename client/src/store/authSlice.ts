import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

import { checkIsMobile } from '../utils/screenUtil';
import { clearLocalStorage, setLocalStorage } from '../services/localStorageService';
import { Reservation } from '../types/Reservation';

type AuthState = {
  user: User | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
  isAuthenticated: boolean,
  isMobile: boolean
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  isAuthenticated: false,
  isMobile: checkIsMobile(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      setLocalStorage(state.user);
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      clearLocalStorage();
    },
    addUserReservation: (state, action: PayloadAction<Reservation>) => {
      if (state.user) {
        state.user.reservations = [...state.user.reservations, action.payload];
        setLocalStorage(state.user);
      }
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setIsLoading: (state) => {
      state.status = 'loading';
    },
    setIsSucessful: (state) => {
      state.status = 'succeeded';
    },
    setIsFailed: (state) => {
      state.status = 'failed';
    },
  },
});

export const { setIsMobile, setUser, clearUser, addUserReservation, setIsLoading, setIsSucessful, setIsFailed } = authSlice.actions;
export default authSlice.reducer;
