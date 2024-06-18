import { useContext } from "react"
import { CalorieTrackerContext } from "../context/CalorieTrackerContext"

export const useCalorieTracker = () => {
    const context = useContext(CalorieTrackerContext);

    if(!context){
        throw new Error('useCalorieTracker must be used within a CalorieTrackerProvider')
      }

      return context;

}