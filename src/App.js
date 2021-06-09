import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Add from "./Component/Add";
import TaskList from "./Component/TaskList";
function App() {
  const select = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <Add dispatch={dispatch}></Add>
      </div>
      <div className="content">
        <div>
          {select
            .filter((x) => x.isDone === false)
            .map((x) => (
              <TaskList key={x.id} {...x}></TaskList>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
