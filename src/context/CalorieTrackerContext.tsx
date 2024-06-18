import { Dispatch, ReactNode, createContext, useReducer } from "react";
import {
  ActivityActions,
  ActivityState,
  activityReducer,
  initialState,
} from "../reducer/activity-reducer";

type CalorieTrackerContextProps = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
};

export const CalorieTrackerContext = createContext<CalorieTrackerContextProps>(
  {} as CalorieTrackerContextProps
);

type CalorieTrackerProviderProps = {
  children: ReactNode;
};

export const CalorieTrackerProvider = ({
  children,
}: CalorieTrackerProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <CalorieTrackerContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CalorieTrackerContext.Provider>
  );
};
