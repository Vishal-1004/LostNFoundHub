import { useSelector } from "react-redux";

const PrivateRoute = ({ component }) => {
  const userState = useSelector((state) => state.users);

  return userState.isLoggedIn ? component : null;
};

export default PrivateRoute;
