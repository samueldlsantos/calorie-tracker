import { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type ActivityListProps = {
  activities: Activity[];
};

function ActivityList({ activities }: ActivityListProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comdida y Actividades
      </h2>
      {activities.length > 0 ? (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 mt-5 bg-white flex justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white font-bold uppercase ${
                  activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
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
              <button>
                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>no hay actividades</p>
      )}
    </>
  );
}

export default ActivityList;
