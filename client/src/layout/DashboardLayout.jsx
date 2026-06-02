import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function DashboardLayout(params) {
    return (
        <main className="md:flex block min-h-screen">
            <div className="min-h-screen hidden md:sticky md:block top-0 left-0">
                <Sidebar />
            </div>
            <div className="flex-1 min-h-screen bg-[#f2f2f2]">
                <Outlet />
            </div>
        </main>
    )
}

export default DashboardLayout