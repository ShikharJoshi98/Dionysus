import { BsRobot } from "react-icons/bs";
import { LuComputer, LuLayoutDashboard, LuUser, LuWallet } from "react-icons/lu";

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
        title: 'Account Details',
        icon: LuUser,
        path: '/dashboard/account-details'
    }
];