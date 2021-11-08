import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuth: false, user: {} }, action) => {
  let newUser = user;
  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { isAuth: true, user: { ...action.user } };
      break;

    case actionTypes.logoutUser:
      newUser = { isAuth: false, user: {} };
      break;

    default:
  }

  return newUser;
};

export default userReducer;
