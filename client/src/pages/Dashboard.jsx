import { LuGithub, LuKey } from "react-icons/lu"
import Input from "../components/Input"
import { IoDocumentTextOutline } from "react-icons/io5"
import Button from "../components/Button"
import { useState } from "react"

function Dashboard() {
    const [projectData, setProjectData] = useState({
        projectName: "",
        projectUrl: "",
        githubToken: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectData);
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
                        <div className="mt-2">
                            <Button text="Check Credits" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Dashboard