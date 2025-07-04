import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastCheckIn: null,
};

const checkinSlice = createSlice({
  name: 'checkin',
  initialState,
  reducers: {
    saveCheckIn(state, action) {
      state.lastCheckIn = action.payload;
    },
  },
});

export const { saveCheckIn } = checkinSlice.actions;
export default checkinSlice.reducer;
