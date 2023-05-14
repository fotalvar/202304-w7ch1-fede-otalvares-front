import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RobotStructure from "./types";

export interface RobotsState {
  robotsData: RobotStructure[];
  robotData: RobotStructure | undefined;
}

const robotsInitialState: RobotsState = {
  robotsData: [],
  robotData: undefined,
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,

  reducers: {
    loadRobots: (
      currentRobots,
      action: PayloadAction<RobotStructure[]>
    ): RobotsState => ({
      ...currentRobots,
      robotsData: [...action.payload],
    }),
    getRobotById: (
      currentRobots,
      action: PayloadAction<string>
    ): RobotsState => ({
      ...currentRobots,
      robotData: currentRobots.robotsData.find(
        (robot) => robot._id === action.payload
      ),
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
export const { getRobotById: getRobotByIdActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
