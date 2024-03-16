import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FC } from "react";
interface PublicRouterProps{
    children:React.ReactElement;
}

const PublicRouter:FC<PublicRouterProps> = ({children}) => {
  const { user } = useAuth();

  console.log(user);
  if (user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default PublicRouter;
