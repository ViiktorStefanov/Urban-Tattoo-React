import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

import { checkIsMobile } from '../utils/screenUtil';
import { clearLocalStorage, setLocalStorage } from '../services/localStorageService';

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
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      setLocalStorage(state.user);
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      clearLocalStorage();
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile, setUser } = authSlice.actions;
export default authSlice.reducer;
