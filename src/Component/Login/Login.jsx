import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as AuthSliceLogin } from "../../features/AuthSlice";
import { Input } from "../Index"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../../Appwrite/auth";
import Button from "../Button";
export default function GlassLogin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("");

  const loginHandler = async (data) => {

    setError("")
    try {
      const session = await authService.login(data)
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 via-orange-100 to-amber-50 p-6">
      <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-xl w-full max-w-md p-8 flex flex-col gap-6">

        {/* === Title === */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-rose-800 drop-shadow-sm">
            Welcome Back 👋
          </h2>
          <p className="text-rose-700/70 text-sm mt-1">
            Login to continue your blogging journey
          </p>
        </div>

        <form onSubmit={handleSubmit(loginHandler)}>
          {/* === Input Fields === */}
          <div className="flex flex-col gap-4">
            <div>
              <Input
                label="Email  "
                type="email"
                name="email"
                {...register("email", { required: true, validate: {} })}
                placeholder="Enter your email "
                className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
              />
            </div>

            <div className="relative">
              <Input
                label="Password  "
                type="password"
                name="password"
                {...register("password", { required: true, validate: {} })}
                placeholder="Enter your Password "
                className="w-full p-2.5 rounded-lg bg-white/50 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder:text-rose-400"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-rose-500 hover:text-rose-700"
              >
                {/* {showPassword ? "🙈" : "👁️"} */}
              </button>
            </div>
          </div>

          {/* === Login Button === */}
          <Button
            type="submit"
            className="mt-2 text-center mt-4 w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white py-2.5 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Login
          </Button>
        </form>

        {/* === Divider === */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-px bg-rose-300/40"></div>
          <span className="text-sm text-rose-700/70">or</span>
          <div className="flex-1 h-px bg-rose-300/40"></div>
        </div>

        {/* === Social Login (Optional) === */}
        <div className="flex flex-col gap-3">
          <button className="w-full py-2.5 bg-white/70 border border-rose-200 rounded-lg text-rose-700 font-medium hover:bg-white/90 transition">
            Continue with Google
          </button>
          <button className="w-full py-2.5 bg-white/70 border border-rose-200 rounded-lg text-rose-700 font-medium hover:bg-white/90 transition">
            Continue with Facebook
          </button>
        </div>

        {/* === Footer Text === */}
        <p className="text-center text-sm text-rose-700/70 mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-rose-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
