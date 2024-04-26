import type { Activity } from "../types";

//Acciones del reducer, utilizan un type y un payload
//Se podria decir que el type es el tipo de accion que se hara
//y el payload lo que va a procesar dicha accion, ya sea un objeto, o un estado, etc.
export type ActivityActions = 
//La accion se llama, save-activity y toma recibe de parametro un activity el cual se va a guardar
    {type: "save-activity", payload: {newActivity: Activity}}


// La definicion de lo que contendra nuestro estado
type ActivityState = {
activities: Activity[]
}

//El estado inicial de nuestro reducer
export const initialState: ActivityState = {
    activities: []
}

//Construccion del reducer
export const activityReducer = (
    state : ActivityState = initialState,
    action : ActivityActions
 ) =>{

    //Aqui se hace la logica de las acciones del reducer
    if(action.type == "save-activity"){
        console.log("Se ejecuta la accion de save activity desde el reducer.")
        console.log("Datos del payload: " + action.payload.newActivity)

        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state

}