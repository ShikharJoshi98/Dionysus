import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLogOut } from "react-icons/lu";
import { IoDiamond } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { sideNav } from "../constants/DashboardConstant";

function Sidebar() {
    const navigate = useNavigate();
    const [isSideNav, setSideNav] = useState(true);

    return (
        <aside className={`${isSideNav ? 'w-54' : 'w-20'} top-0 left-0 sticky transition-all duration-300 min-h-screen hidden bg-[#fdfdfd] p-4 md:block border-r border-gray-300`}>
            <div className="flex items-center gap-4">
                <img src="/Dionysus_logo.png" alt="" className="w-9" />
                <h1
                    className={`text-md sm:text-xl font-semibold transition-all duration-300 text-neutral-800 tracking-tight
                    ${isSideNav
                            ? 'opacity-100 translate-x-0 w-auto'
                            : 'opacity-0 overflow-hidden w-0 pointer-events-none'
                        }`}
                >
                    Dionysus
                </h1>
            </div>
            <button
                onClick={() => setSideNav(!isSideNav)}
                className="absolute cursor-pointer z-50 -right-3 top-20 border border-gray-500 text-neutral-700 rounded-full p-1 bg-gray-200 shadow-md hover:scale-105"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="space-y-2 mt-20">
                {sideNav.map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (
                        <li
                            onClick={() => navigate(sideNavItem.path)}
                            key={index}
                            className={`cursor-pointer ${location.pathname === sideNavItem.path ? 'bg-blue-500/15 text-blue-500' : 'group-hover:text-blue-500 hover:bg-blue-500/10 text-neutral-600'}  font-medium flex items-center p-2 rounded-md`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-1  ${location.pathname === sideNavItem.path ? 'bg-white shadow rounded-lg' : 'bg-transparent'}`}>
                                    <Icon className="size-5" />
                                </div>
                                <p
                                    className={`transition-opacity duration-300 text-sm whitespace-nowrap
                                        ${isSideNav
                                            ? 'opacity-100'
                                            : 'opacity-0 w-0 overflow-hidden pointer-events-none'
                                        }`}
                                >
                                    {sideNavItem.title}
                                </p>
                            </div>
                        </li>)
                }
                )}
            </ul>
            <button onClick={() => { dispatch(logoutRequest()); navigate("/") }} className="flex items-center gap-3 p-2 cursor-pointer absolute bottom-10 hover:text-red-600 text-red-500">
                <span className='text-xl'>
                    <LuLogOut />
                </span>
                <span
                    className={`font-semibold transition-opacity duration-300 text-sm whitespace-nowrap ${isSideNav ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden pointer-events-none'}`}
                >
                    Logout
                </span>
            </button>
        </aside>
    )
}

export default Sidebar