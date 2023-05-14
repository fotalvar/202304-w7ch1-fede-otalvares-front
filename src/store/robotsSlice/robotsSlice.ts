import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RobotStructure from "./types";

export interface RobotState {
  robotsData: RobotStructure[];
}

const robotsInitialState: RobotState = {
  robotsData: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,

  reducers: {
    loadRobots: (
      currentRobots,
      action: PayloadAction<RobotStructure[]>
    ): RobotState => ({
      ...currentRobots,
      robotsData: [...action.payload],
    }),
    getRobot: (currentRobots, action: PayloadAction<string>): RobotState => ({
      ...currentRobots,
      robotsData: currentRobots.robotsData.filter(
        (robot) => robot._id === action.payload
      ),
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
export const { getRobot: getRobotActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
