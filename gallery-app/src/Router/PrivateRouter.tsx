import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FC } from "react";

interface PrivateRouterProps {
    children: React.ReactElement;
}

const PrivateRouter: FC<PrivateRouterProps> = ({ children }) => {
    const { user } = useAuth(); // Get the user from the authentication context

    console.log(user); // Log the user object to the console for debugging purposes

    // If there is no user logged in, redirect to the signup page
    if (!user) {
        return <Navigate to="/signup" replace={true} />;
    }

    // If a user is logged in, render the children components
    return children;
};

export default PrivateRouter;
