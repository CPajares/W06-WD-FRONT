import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_URL_API_HEROKU;

export const loginUserThunks = (user) => async (dispatch) => {
  const response = await axios.post(`${apiUrl}login`, user);
  console.log("hola");

  if (response.status === 200) {
    const token = response.data.token;
    console.log(token);
    const user = jwtDecode(token);
    console.log(user);
    /* dispatch(loginUserAction(loginUser)); */
    /*     localStorage.setItem("tokenStorage", JSON.stringify({ token }));
     */
  }
};
