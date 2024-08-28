import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TattooState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
}

const initialState: TattooState = {
  status: 'idle',
  error: null,
};

const tattooSlice = createSlice({
  name: 'tattoo',
  initialState,
  reducers: {
    increment: (state) => {
    },
  },
});

export const { increment } = tattooSlice.actions;
export default tattooSlice.reducer;
