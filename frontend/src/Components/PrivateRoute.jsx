import { useSelector } from "react-redux";

const PrivateRoute = ({ component }) => {
  const userState = useSelector((state) => state.users);
  //console.log(userState);

  return userState ? component : null;
};

export default PrivateRoute;
