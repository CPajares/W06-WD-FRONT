const Robot = ({ robot }) => {
  return (
    <>
      <h2>Nombre: {robot.name}</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OTaIMPhqrWk-t6KRXIH5cX9ky6ms_Escl7yIbqrfQP6dyct8O_qK1cAgd_WHqtaCmQY&usqp=CAU"
        alt="robot"
      ></img>
      <h3>Caracteristicas</h3>
      <ul className="list-group">
        <li className="list-group-item list-group-item-success">Velocidad:</li>
        <li className="list-group-item list-group-item-success">
          Resistencia:
        </li>
        <li className="list-group-item list-group-item-success">Fecha</li>
      </ul>
      <button type="button" className="btn btn-warning">
        MODIFICAR
      </button>
      <button className="btn btn-danger">BORRAR</button>
    </>
  );
};

export default Robot;
