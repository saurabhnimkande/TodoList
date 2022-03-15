import "./Todo.css";
import { Input, DatePicker, TimePicker, Button } from "antd";
import moment from "moment";
const { TextArea } = Input;
export const Todo = () => {
  return (
    <div>
      <h1>To-Do-List</h1>
      <div id="todoContainer">
        <div>
          <h1>Add Todo</h1>
          <p>Todo Title : </p>
          <Input placeholder="Basic usage" />
          <p>Date:</p>
          <DatePicker />
          <p>Time:</p>
          <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
          <p>Todo Description :</p>
          <TextArea showCount maxLength={1000} style={{ height: 120 }} />
          <Button
            type="primary"
            style={{ marginLeft: "160px", marginTop: "20px" }}
          >
            Add Todo
          </Button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
