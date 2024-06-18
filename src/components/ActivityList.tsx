import { categories } from "../data/categories";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useCalorieTracker } from "../hooks/useCalorieTracker";



function ActivityList() {
  const {state, dispatch} = useCalorieTracker();

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
      {state.activities.length > 0 ? (
        state.activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 mt-5 bg-white flex justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white font-bold uppercase ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                  }`}
              >
                {categories[activity.category - 1].name}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.description}</p>
              <p className="font-black text-4xl text-lime-500">
                {activity.calories}
                <span> Calorias</span>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <button onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}>
                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
              </button>
              <button onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}>
                <XCircleIcon className="h-8 w-8 text-red-500" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center py-5 font-bold ">Aun no hay actividades registradas</p>
      )}
    </>
  );
}

export default ActivityList;
