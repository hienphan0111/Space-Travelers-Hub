import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ROCKETS_URL = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk(
  'get/getRockets',
  async () => {
    try {
      const res = await axios.get(ROCKETS_URL);
      return res.data;
    } catch (error) {
      return new Error('Some things went wrong', error);
    }
  },
);

const initialState = {
  rockets: [],
  status: 'update',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.fulfilled, (state, action) => {
        const { payload } = action;
        return {
          rockets: payload,
          status: 'complete',
        };
      });
  },
});

export default rocketsSlice.reducer;
