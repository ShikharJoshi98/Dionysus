import { useParams } from "react-router-dom"
import { projects } from "../constants/DashboardConstant";
import { LuGithub } from "react-icons/lu";

function Project() {
    const { projectId } = useParams();

    const project = projects.find(project => String(project._id) === projectId);
    return (
        <main className="p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <a href={project?.githubUrl} target="_blank" className="py-2 px-4 text-xs rounded-md bg-blue-500 text-white font-medium flex items-center justify-center gap-2">
                        <LuGithub />
                        <p>
                            This project is linked to <span className="underline">{project?.githubUrl}</span>
                        </p>
                    </a>
                    <div className="flex items-center gap-3">
                        <button className="bg-white py-2 px-4 cursor-pointer hover:opacity-90 text-xs rounded-md font-medium border border-gray-300">Invite a team member</button>
                        <button className="bg-white py-2 px-4 cursor-pointer hover:opacity-90 text-xs rounded-md font-medium border border-gray-300">Archive</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project