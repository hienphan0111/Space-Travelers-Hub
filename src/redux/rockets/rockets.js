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
    bookRocket: (state, action) => {
      const { payload } = action;
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...rockets, status: 'completed' };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.fulfilled, (state, action) => {
        const { payload } = action;
        const rockets = payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          imgUrl: rocket.flickr_images[0],
          reserved: false,
        }));
        return {
          rockets,
          status: 'complete',
        };
      });
  },
});

export const { bookRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
