import { LuGithub, LuKey, LuLoader } from "react-icons/lu"
import Input from "../components/Input"
import { IoDocumentTextOutline } from "react-icons/io5"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearProjectState, createProjectRequest } from "../features/project/projectAction"
import toast from "react-hot-toast"

function Dashboard() {
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector(state => state.project.createProject);
    const [projectData, setProjectData] = useState({
        projectName: "",
        projectUrl: "",
        githubToken: ""
    });
    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch(clearProjectState());
        }
        if (error) {
            toast.error(error);
            dispatch(clearProjectState());
        }
    }, [message, error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProjectRequest(projectData));
    }
    return (
        <main className="p-6">
            <div className="flex md:flex-row flex-col items-center justify-center gap-10 min-h-screen">
                <img src="/Dashboard_image.png" alt="" className="w-60" />
                <div className="space-y-8 md:space-y-4">
                    <div>
                        <h1 className="text-xl md:text-start text-center font-semibold">Link your Github Repository</h1>
                        <p className="text-neutral-500 md:text-start text-center text-sm">Enter the URL of your GitHub repository to link it to Dionysus.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:items-start items-center">
                        <Input icon={IoDocumentTextOutline} placeholder="Project Name" name="projectName" value={projectData.projectName} onChange={handleChange} />
                        <Input icon={LuGithub} placeholder="Github Repository URL" name="projectUrl" value={projectData.projectUrl} onChange={handleChange} />
                        <Input icon={LuKey} placeholder="Github Token (optional, for private repositories)" name="githubToken" value={projectData.githubToken} onChange={handleChange} />
                        <button
                            type="submit"
                            className="w-full mt-2 py-2.5 px-4 bg-linear-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-indigo-500/10 active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {loading ?
                                <LuLoader className="mx-auto animate-spin size-5" />
                                :
                                <>Create Project</>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Dashboard