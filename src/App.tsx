import { useReducer, useEffect, useMemo } from "react";
import { activityReducer, initialState } from "./reducer/activity-reducer";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities])

  const canRestart = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-center text-lg font-bold uppercase">
            Contador de calorias
          </h1>
          <button className="bg-gray-800 hover:bg-gray-950 p-2 rounded-lg text-white font-bold uppercase cursor-pointer disabled:bg-gray-500 text-sm disabled:opacity-10"
            onClick={() => dispatch({ type: "restart-app" })}
            disabled={!canRestart()}>
            Reiniciar app
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state}  ></Form>
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities}/>
        </div>

      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch}></ActivityList>
      </section>
    </>
  );
}

export default App;
