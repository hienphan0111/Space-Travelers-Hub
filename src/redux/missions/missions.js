import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'get/getMission',
  async () => {
    try {
      const res = await axios.get(MISSION_URL);
      return res.data;
    } catch (error) {
      return new Error('Somethings went wrong', error);
    }
  },
);

const initialState = {
  missions: [],
  status: 'update',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getMissions.fulfilled, (status, action) => {
      const { payload } = action;
      return {
        missions: payload,
        status: 'completed',
      };
    });
  },
});

export default missionsSlice.reducer;
