import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Toaster } from "react-hot-toast"
import AllProjects from "./pages/AllProjects"
import Project from "./pages/Project"

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
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
