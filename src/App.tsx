import "./App.css";
import ImportField from "./Components/ImportField";
import { useState } from "react";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
//0:31:00
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <ImportField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
