
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const AuthGuard = ({ children }) => {

const isAuthenticated = useSelector((state) => state.auth.user);

if (!isAuthenticated) {
  return <Navigate to="/login" />;
}

return children;
}

export default AuthGuard;