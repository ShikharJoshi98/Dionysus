import { LuLoader } from "react-icons/lu";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isAuthenticated, authChecked } = useSelector(state => state.auth);

    if (!authChecked) {
        return <div className="flex items-center justify-center h-screen w-screen">
            <LuLoader className="size-16 animate-spin text-blue-500" />
        </div>
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/"
                replace
            />
        )
    }

    return children;
}

export default ProtectedRoute;