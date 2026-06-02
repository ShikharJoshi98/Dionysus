import { useState } from "react";
import { LuArrowRight, LuLock, LuMail, LuUser } from "react-icons/lu";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-4 selection:bg-indigo-500/30">
            <div className="relative w-full max-w-md">
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl opacity-10 blur-xl"></div>
                <div className="relative bg-white/40 border border-zinc-800 rounded-2xl shadow-2xl p-8 backdrop-blur-xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="flex items-center gap-2">
                            <img src="/Dionysus_logo.png" alt="Logo" className="size-6.5" />
                            <h1 className="text-2xl font-semibold tracking-tight text-neutral-700">Dionysus</h1>
                        </div>
                        <p className="text-zinc-600 text-sm mt-1.5">Sign in to your Dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                        <div>
                            <label className="block mb-1.5 text-zinc-800 font-medium">Email</label>
                            <Input icon={LuMail} placeholder="you@company.com" name="email" value={loginData.email} onChange={handleChange} />
                        </div>

                        <div>
                            <label className="block mb-1.5 text-zinc-800 font-medium">Password</label>
                            <div className="relative">
                                <LuLock className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className='w-full bg-white text-sm h-8 pl-9 pr-3 py-2 font-normal rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-zinc-900 placeholder-zinc-500 transition duration-200'
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-2 py-2.5 px-4 bg-linear-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-indigo-500/10 active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Sign In <LuArrowRight className="size-4" />
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-zinc-700">
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/register")}
                            className="text-blue-500 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;