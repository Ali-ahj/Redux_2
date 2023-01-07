import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./redux/counter/counterAction";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countReducer);
  const handleClick_decrease = () => {
    dispatch(decrease());
  };
  const handleClick_increase = () => {
    dispatch(increase());
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleClick_increase}>++</button>
      <button onClick={handleClick_decrease}>--</button>
    </div>
  );
}

export default App;
