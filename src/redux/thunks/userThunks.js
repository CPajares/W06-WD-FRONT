import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_URL_API_HEROKU;

export const loginUserThunks = (user) => async (dispatch) => {
  const response = await fetch(`${apiUrl}login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginUser = await response.json();
  if (response.ok) {
    const token = jwtDecode(response.token);
    dispatch(loginUserAction(loginUser));
    localStorage.setItem("tokenStorage", JSON.stringify({ token }));
  }
};
