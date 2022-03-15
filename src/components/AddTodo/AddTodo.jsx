import { Input, DatePicker, TimePicker, Button, message } from "antd";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/actions";
import { v4 as uuidv4 } from "uuid";
const { TextArea } = Input;
export const AddTodo = () => {
  const dispatch = useDispatch();
  let todoData = useRef({
    id: "",
    title: "",
    description: "",
    date: "",
    time: "",
  });
  const handelDate = (date, dateString) => {
    todoData.current.date = dateString;
  };

  const handelTime = (time, timeString) => {
    todoData.current.time = timeString;
  };

  const handelTitle = (e) => {
    todoData.current.title = e.target.value;
  };

  const handelDescription = (e) => {
    todoData.current.description = e.target.value;
  };

  const handelAddTodo = () => {
    let { date, time, title } = todoData.current;
    if (title === "") {
      message.error("Please Enter Title");
      return;
    }
    if (date === "") {
      message.error("Please Enter Date");
      return;
    }
    if (time === "") {
      message.error("Please Enter Time");
      return;
    }
    todoData.current.id = uuidv4();
    dispatch(addTodo(todoData.current));
    message.success("To-do Added Successfully");
  };

  return (
    <>
      <h1>Add Todo</h1>
      <p>Todo Title : </p>
      <Input placeholder="Basic usage" onChange={handelTitle} />
      <p>Date:</p>
      <DatePicker onChange={handelDate} />
      <p>Time:</p>
      <TimePicker onChange={handelTime} />
      <p>Todo Description :</p>
      <TextArea
        showCount
        maxLength={500}
        style={{ height: 150 }}
        onChange={handelDescription}
      />
      <Button
        type="primary"
        style={{
          marginLeft: "160px",
          marginTop: "25px",
          marginBottom: "10px",
        }}
        onClick={handelAddTodo}
      >
        Add Todo
      </Button>
    </>
  );
};
