import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      
    },
  },
});

export const { increment } = authSlice.actions;
export default authSlice.reducer;
