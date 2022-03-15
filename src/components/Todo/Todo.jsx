import { AddTodo } from "../AddTodo/AddTodo";
import { Completed } from "../Completed/Completed";
import { Ongoing } from "../Ongoing/Ongoing";
import "./Todo.css";

export const Todo = () => {
  return (
    <div>
      <h1 style={{ fontWeight: "bold", paddingTop: "10px" }}>To-Do-List</h1>
      <div id="todoContainer">
        <div>
          <AddTodo></AddTodo>
        </div>
        <div>
          <h1>Ongoing</h1>
          <Ongoing></Ongoing>
        </div>
        <div>
          <h1>Completed</h1>
          <Completed></Completed>
        </div>
      </div>
    </div>
  );
};
