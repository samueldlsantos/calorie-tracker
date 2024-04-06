import { useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

const Form = () => {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    description: "",
    calories: 0,
  });

  const isValidSubmit = () => {
    const { description, calories } = activity;
    console.log(description.trim() !== "" && calories > 0)
    // console.log(calories)
    return description.trim() !== "" && calories > 0;
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
