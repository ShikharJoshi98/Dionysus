import { LuLoader, LuSparkles } from "react-icons/lu"
import { colors, projects } from "../constants/DashboardConstant"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjectsRequest } from "../features/project/projectAction";

function AllProjects() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, projects } = useSelector(state => state.project.getProjects);

    useEffect(() => {
        dispatch(getProjectsRequest());
    }, [dispatch]);

    return (
        <main className="p-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-medium">Your Projects</h1>
                {loading ?
                    <div className="flex items-center justify-center w-full h-screen">
                        <LuLoader className="size-16 animate-spin text-blue-500" />
                    </div>
                    :
                    <div className={`mt-10 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
                        {
                            projects?.length > 0 ?
                                projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${colors[Math.floor(Math.random() * colors.length)]} border border-gray-400 text-black`}>
                                            <LuSparkles className="w-5 h-5" />
                                        </div>
                                        <div className="mt-5">
                                            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                                                {project?.name}
                                            </h2>
                                            <a href={project.githubUrl} target="_blank" className="mt-2 text-sm text-gray-500 truncate hover:underline cursor-pointer">
                                                {project?.githubUrl}
                                            </a>
                                            <button onClick={() => navigate(`/dashboard/project/${project?._id}`)} className="rounded-xl mt-5 place-self-end block border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">
                                                Open
                                            </button>
                                        </div>
                                    </div>
                                )) :
                                <p className="mt-20 mx-auto text-center bg-gray-100 text-neutral-500">No Projects</p>
                        }
                    </div>}
            </div>
        </main>
    )
}

export default AllProjects