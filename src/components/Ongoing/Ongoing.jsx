import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import "./Ongoing.css";
import { markComplete, deleteOngoing } from "../../redux/todos/actions";
export const Ongoing = () => {
  const dispatch = useDispatch();
  const { ongoing } = useSelector((state) => ({
    ongoing: state.ongoing,
  }));

  const markCompleted = (payload) => {
    dispatch(markComplete(payload));
  };

  const removeOngoing = (payload) => {
    dispatch(deleteOngoing(payload));
  };

  return (
    <div id="ongoingTodosMainDiv">
      {ongoing.map((el) => (
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
              onClick={() => markCompleted(el)}
              style={{ width: "150px", marginBottom: "5px" }}
            >
              Mark Completed
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#F44336",
                width: "150px",
                border: "1px solid red",
              }}
              onClick={() => removeOngoing(el)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
