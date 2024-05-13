import type { Activity } from "../types";

//Acciones del reducer, utilizan un type y un payload
//Se podria decir que el type es el tipo de accion que se hara
//y el payload lo que va a procesar dicha accion, ya sea un objeto, o un estado, etc.
export type ActivityActions =
    //La accion se llama, save-activity y toma recibe de parametro un activity el cual se va a guardar
    { type: "save-activity", payload: { newActivity: Activity } } |
    { type: "set-activeId", payload: { id: Activity["id"] } } |
    { type: "delete-activity", payload: { id: Activity["id"] }} |
    { type: "restart-app"}


// La definicion de lo que contendra nuestro estado
export type ActivityState = {
    activities: Activity[],
    activeId: Activity["id"]
}

//Estado del local Storage, se ejecuta antes del estado inicial del state para evaluar el dato actual en LS
const localStorageData = () : Activity[] => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : [] 
}

//El estado inicial de nuestro reducer
export const initialState: ActivityState = {
    activities: localStorageData(),
    activeId: ''
}

//Construccion del reducer
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    //Aqui se hace la logica de las acciones del reducer
    if (action.type == "save-activity") {

        //logica para la edicion
        let updatedActivities: Activity[] = []
        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)

        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if (action.type == "set-activeId") {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type == "delete-activity") {
        return {
            ...state,
            activities: state.activities.filter( activity => activity.id !== action.payload.id)
        }
    }

    if(action.type = "restart-app") {
        return {
            activities: [],
            activeId: ''
        }
    }

    return state

}