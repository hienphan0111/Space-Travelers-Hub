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
    joinMission: (state, action) => {
      const { payload } = action;
      const missions = state.missions.map((mission) => {
        if (mission.missionId !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { missions, status: state.status };
    },
    leaveMission: (state, action) => {
      const { payload } = action;
      const missions = state.missions.map((mission) => {
        if (mission.missionId !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { missions, status: state.status };
    },
  },
  extraReducers(builder) {
    builder.addCase(getMissions.fulfilled, (status, action) => {
      const { payload } = action;
      const missions = payload.map((mission) => ({
        description: mission.description,
        missionName: mission.mission_name,
        missionId: mission.mission_id,
        reserved: false,
      }));
      return {
        missions,
        status: 'completed',
      };
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
