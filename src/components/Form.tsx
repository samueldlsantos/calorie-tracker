import { useState, Dispatch, useEffect } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducer/activity-reducer";
import { v4 as uuidv4 } from 'uuid'

type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

const Form = ({dispatch, state}: FormProps) => {

  const initialStateActivity: Activity = {
    id: uuidv4(),
    category: 1,
    description: "",
    calories: 0,
  }

  const [activity, setActivity] = useState<Activity>(initialStateActivity);

  useEffect(( )=> {
if(state.activeId){
  console.log("El activeId cambio: " , state.activeId)
   const activityActivated  = state.activities.filter( ({ id }) => id === state.activeId)[0];

   setActivity(activityActivated)

}
  }, [state.activeId])

  const isValidSubmit = () => {
    const { description, calories } = activity;
    return description.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({type: "save-activity", payload: {newActivity: activity}})

    setActivity({...initialStateActivity, id: uuidv4()});

  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          name="category"
          id="category"
          value={activity.category}
          onChange={(e) =>
            setActivity({ ...activity, category: Number(e.target.value) })
          }
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="description">
          Descripcion:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="text"
          name="description"
          placeholder="Ej. Jugo de naranja, Pesas, Cardio, Tacos"
          value={activity.description}
          onChange={(e) =>
            setActivity({ ...activity, description: e.target.value })
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="calories">
          Calorias:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="number"
          name="calories"
          placeholder=""
          value={activity.calories}
          onChange={(e) =>
            setActivity({ ...activity, calories: Number(e.target.value) })
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <input
          className="bg-gray-800 hover:bg-gray-950 w-full p-2 rounded-lg text-white font-bold uppercase cursor-pointer disabled:bg-gray-500"
          type="submit"
          value={ `Agregar ${ categories[activity.category - 1].name } `}
          disabled={!isValidSubmit()}
        />
      </div>
    </form>
  );
};

export default Form;
