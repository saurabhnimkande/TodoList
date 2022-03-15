import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import "./Ongoing.css";
import { markComplete } from "../../redux/todos/actions";
export const Ongoing = () => {
  const dispatch = useDispatch();
  const { ongoing } = useSelector((state) => ({
    ongoing: state.ongoing,
  }));

  const markCompleted = (payload) => {
    dispatch(markComplete(payload));
  };

  return (
    <div id="ongoingTodosMainDiv">
      {ongoing.map((el) => (
        <div key={el.time + el.title} className="ongoingTaskIndividual">
          <div>
            {" "}
            <p style={{ fontWeight: "bold" }}>{el.title}</p>
            <p>
              Date-Time: {el.date} {el.time}
            </p>
            <p>Description: {el.description}</p>
          </div>
          <div>
            <Button type="primary" onClick={() => markCompleted(el)}>
              Mark Completed
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
