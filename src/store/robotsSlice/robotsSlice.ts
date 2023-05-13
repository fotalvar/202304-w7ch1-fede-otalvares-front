import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotsStructure } from "./types";

const robotsState: RobotsStructure[] = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsState,
  reducers: {
    loadRobots: (_currentRobots, action: PayloadAction<RobotsStructure[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
