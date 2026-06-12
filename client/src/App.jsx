import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Toaster } from "react-hot-toast"
import AllProjects from "./pages/AllProjects"
import Project from "./pages/Project"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { checkAuthRequest } from "./features/auth/authAction"
import PublicRoute from "./guards/PublicRoute"
import ProtectedRoute from "./guards/ProtectedRoute"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, [dispatch])

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<AllProjects />} />
            <Route path="project/:projectId" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
