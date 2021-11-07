const Robot = ({ robot, day, month, year }) => {
  return (
    <>
      <h2>Nombre: {robot.name}</h2>
      <img src={robot.url} alt={`${robot.name}`}></img>
      <h3>Caracteristicas</h3>
      <ul className="list-group">
        <li className="list-group-item list-group-item-success">
          Velocidad:{robot.features.speed}
        </li>
        <li className="list-group-item list-group-item-success">
          Resistencia: {robot.features.resistence}
        </li>
        <li className="list-group-item list-group-item-success">
          Fecha: {day}/{month}/{year}
        </li>
      </ul>
      <button type="button" className="btn btn-warning">
        MODIFICAR
      </button>
      <button className="btn btn-danger">BORRAR</button>
    </>
  );
};

export default Robot;
