import React from "react";
import { useState , useEffect } from "react";
import InputData from "./components/InputData";
import ShowData from "./components/ShowData";
import "./styles/App.scss";
function App() {
  const [inputTask, setInputTask] = useState("");
  const [inputname, setInputName] = useState("");
  const [loadingData , setLoadingData] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [displayRes , setDisplayRes ] = useState("");
  const [insertData , setInsertData] = useState(false);
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilterTodos(loadingData.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(loadingData.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(loadingData);
    }
  }, [status , loadingData])

  return (
    <div className="todo-list">
      <h4 className="head-t">TodoList : {status} : [{displayRes}]</h4>
      <div className="con-todo">
        <InputData
          setInputTask={setInputTask}
          setInputName={setInputName}
          inputTask={inputTask}
          inputname={inputname}
          setStatus={setStatus}
          displayRes={displayRes}
          setDisplayRes={setDisplayRes}
          setInsertData = {setInsertData}
          insertData = {insertData}
        />
        <ShowData filterTodos={filterTodos} insertData={insertData} loadingData={loadingData} setLoadingData={setLoadingData} />
      </div>
    </div>
  );
}

export default App;
