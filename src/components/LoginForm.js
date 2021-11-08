import { useState } from "react";

const LoginForm = () => {
  const ClickLogin = (event) => {
    event.preventDefault();
    console.log("yes");
  };

  const InitialLogin = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(InitialLogin);

  const changeDataLogin = (event) => {
    event.preventDefault();
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={ClickLogin}>
        <div className="form-group">
          <label htmlFor="username">Name: </label>
          <input
            value={loginData.username}
            onChange={changeDataLogin}
            autoComplete="off"
            type="text"
            className="form-control"
            id="username"
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            value={loginData.password}
            onChange={changeDataLogin}
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-info">
          LOG IN
        </button>
      </form>
    </>
  );
};

export default LoginForm;
