import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Toaster } from "react-hot-toast"

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
