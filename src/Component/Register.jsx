import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as AuthSliceLogin } from "../features/AuthSlice";
import { Input } from "./Index"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../Appwrite/auth";
import Button from "./Button";


export default function Register() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("");

    const registerHandler = async (data) => {
        console.log("data of the register form ", data);

        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(AuthSliceLogin({ userData }))
                }
                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        }
    }











    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-200 to-rose-100 p-6 relative overflow-hidden">

            {/* soft glass overlay shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-24 top-10 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-3xl" />
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-300/30 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">

                {/* Left Side — Blog aesthetic intro */}
                <section className="hidden md:flex flex-col justify-center pl-8 pr-4 space-y-6">
                    <h2 className="text-4xl font-serif text-rose-900 leading-tight">
                        Join Our Writing Community
                    </h2>
                    <p className="text-lg text-rose-800/80 font-light">
                        Share your voice, discover new stories, and connect with like-minded readers and writers.
                    </p>

                    <ul className="space-y-4 text-rose-900/80">
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">🖋️</span>
                            Publish your thoughts and ideas.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">💬</span>
                            Engage with a growing community of creators.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">✨</span>
                            Customize your profile and showcase your blogs.
                        </li>
                    </ul>
                </section>

                {/* Right Side — Glass registration card */}
                <main className="relative p-6 md:p-10">
                    <div className="mx-auto max-w-md">
                        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg p-8 md:p-10">
                            <div className="mb-6 text-center">
                                <h3 className="text-3xl font-serif text-rose-900 mb-1">Create Your Account</h3>
                                <p className="text-sm text-rose-800/70">
                                    Start your journey as a blogger today.
                                </p>
                            </div>

                            {/* FORM FIELDS (UI Only) */}
                            <form onSubmit={handleSubmit((data) => {
                                console.log("Form Data:", data);
                                registerHandler(data);
                            })} className="space-y-5">
                                <div>

                                    <Input
                                        label="Full Name  "
                                        type="text"
                                        name="name"
                                        {...register("name", { required: true, validate: {} })}
                                        placeholder="Jane Doe"
                                        className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
                                    />
                                </div>

                                <div>
                                    <Input
                                        label="Email  Address"
                                        type="email"
                                        name="email"
                                        {...register("email", { required: true, validate: {} })}
                                        placeholder="email@gmail.com "
                                        className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
                                    />
                                </div>

                                <div>
                                    <Input
                                        label="Password  "
                                        type="password"
                                        name="password"
                                        {...register("password", { required: true, validate: {} })}
                                        placeholder="Enter your Password "
                                        className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
                                    />
                                </div>

                                <div>
                                    <Input
                                        label="Confirm Password  "
                                        type="password"
                                        name="password"
                                        {...register("conformpassword", { required: true, validate: {} })}
                                        placeholder="Enter your Password "
                                        className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
                                    />
                                </div>

                                {/* === Login Button === */}
                                <Button
                                    type="submit"
                                    className=" cursor-pointer mt-2 text-center mt-4 w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white py-2.5 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
                                >
                                    Sign Up
                                </Button>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-rose-300/40" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white/60 px-3 text-rose-700/70">or continue with</span>
                                    </div>
                                </div>

                                {/* social buttons */}
                                <div className="grid grid-cols-3 gap-3 mt-3">
                                    <button className="rounded-lg bg-white/70 border border-rose-200 py-2 text-sm text-rose-900 hover:bg-white">
                                        Google
                                    </button>
                                    <button className="rounded-lg bg-white/70 border border-rose-200 py-2 text-sm text-rose-900 hover:bg-white">
                                        GitHub
                                    </button>
                                    <button className="rounded-lg bg-white/70 border border-rose-200 py-2 text-sm text-rose-900 hover:bg-white">
                                        Twitter
                                    </button>
                                </div>

                                <p className="text-xs text-rose-800/70 text-center pt-4">
                                    By creating an account, you agree to our{" "}
                                    <a className="underline" href="#">Terms</a> and{" "}
                                    <a className="underline" href="#">Privacy Policy</a>.
                                </p>
                            </form>
                        </div>

                        {/* footer */}
                        <div className="mt-4 text-xs text-rose-800/70 text-center">
                            Already a member?{" "}
                            <a href="#" className="text-rose-600 font-semibold underline">
                                Sign in
                            </a>
                        </div>
                        <div>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
