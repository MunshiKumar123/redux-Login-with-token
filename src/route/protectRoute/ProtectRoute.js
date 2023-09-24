import { Navigate, Outlet } from "react-router-dom";
import { TOKEN_LOGIN } from '../../redux/type/type'


export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem(TOKEN_LOGIN)

    if (!token) {
        return <Navigate to='/' />;
    }
    return children;
};
export const PublicdRoute = () => {
    const token = localStorage.getItem(TOKEN_LOGIN)
    if (!token) {
        return <Outlet />;
    }
    return <Navigate to='/' />
};