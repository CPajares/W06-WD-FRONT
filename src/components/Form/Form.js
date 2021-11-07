import { useState } from "react";
import useRobot from "../../hooks/useRobot";

const Form = () => {
  const { createRobot } = useRobot();

  const InitialData = {
    features: {
      speed: "",
      resistence: "",
      date: "",
    },
    name: "",
    url: "",
  };

  const changeData = (event) => {
    event.preventDefault();
    setNewDataRobot({ ...newDataRobot, [event.target.id]: event.target.value });
  };

  const changeDataFeature = (event) => {
    event.preventDefault();
    setNewDataRobot({
      ...newDataRobot,
      features: {
        ...newDataRobot.features,
        [event.target.id]: event.target.value,
      },
    });
  };

  const [newDataRobot, setNewDataRobot] = useState(InitialData);

  const ClickCreate = (evento) => {
    evento.preventDefault();
    createRobot(newDataRobot);
    setNewDataRobot(InitialData);
  };

  return (
    <form onSubmit={ClickCreate}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Name: </label>
        <input
          onChange={changeData}
          autoComplete="off"
          type="name"
          className="form-control"
          id="name"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">Url: </label>
        <input
          onChange={changeData}
          type="url"
          className="form-control"
          id="url"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="speed">Speed</label>
        <select
          onChange={changeDataFeature}
          className="form-control"
          id="speed"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="resistence">Resistence</label>
        <select
          onChange={changeDataFeature}
          className="form-control"
          id="resistence"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date: </label>
        <input
          onChange={changeDataFeature}
          type="date"
          className="form-control"
          id="date"
          placeholder="name@example.com"
        />
      </div>
      <button type="submit" className="btn btn-info">
        CREATE
      </button>
    </form>
  );
};

export default Form;
