import { BsRobot } from "react-icons/bs";
import { LuClipboardList, LuComputer, LuLayoutDashboard, LuUser, LuWallet } from "react-icons/lu";

export const sideNav = [
    {
        title: 'Dashboard',
        icon: LuLayoutDashboard,
        path: '/dashboard'
    },
    {
        title: 'Q&A',
        icon: BsRobot,
        path: '/dashboard/analyse'
    },
    {
        title: 'Meetings',
        icon: LuComputer,
        path: '/dashboard/resumeBuilder'
    },
    {
        title: 'Billing',
        icon: LuWallet,
        path: '/dashboard/interviewPrep'
    },
    {
        title: 'Your Projects',
        icon: LuClipboardList,
        path: '/dashboard/projects'
    }
];

export const projects = [
    {
        _id: 1,
        name: "Agentify",
        githubUrl: "https://github.com/ShikharJoshi98/Agentify",

    }
]

export const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-cyan-100"
]