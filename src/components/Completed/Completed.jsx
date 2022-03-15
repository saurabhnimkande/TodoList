import { useDispatch, useSelector } from "react-redux";
import { Button, message } from "antd";
import {
  deleteAllCompleted,
  deleteCompleted,
  markIncomplete,
} from "../../redux/todos/actions";
export const Completed = () => {
  const dispatch = useDispatch();
  const { completed } = useSelector((state) => ({
    completed: state.completed,
  }));

  const removeCompleted = (payload) => {
    message.success("Task Deleted!");
    dispatch(deleteCompleted(payload));
  };

  const removeAllCompleted = () => {
    if (completed.length === 0) {
      message.error("Nothing to Delete");
      return;
    }
    message.success("All Task Deleted!");
    dispatch(deleteAllCompleted());
  };

  const pushToOngoing = (payload) => {
    message.success("Added to Ongoing Tasks");
    dispatch(markIncomplete(payload));
  };

  return (
    <div className="ongoingTodosMainDiv">
      <Button
        type="primary"
        style={{
          backgroundColor: "#F44336",
          border: "1px solid red",
          marginBottom: "10px",
        }}
        onClick={removeAllCompleted}
      >
        Delete All Completed
      </Button>
      {completed.map((el) => (
        <div key={el.id} className="ongoingTaskIndividual">
          <div>
            {" "}
            <p style={{ fontWeight: "bold" }}>{el.title}</p>
            <p>
              Date-Time: {el.date} {el.time}
            </p>
            <p>Description: {el.description}</p>
          </div>
          <div>
            <Button
              type="primary"
              style={{ width: "150px", marginBottom: "5px" }}
              onClick={() => pushToOngoing(el)}
            >
              Mark Incomplete
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#F44336",
                width: "150px",
                border: "1px solid red",
              }}
              onClick={() => removeCompleted(el)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
