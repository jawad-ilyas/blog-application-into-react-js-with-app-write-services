import React, { useState } from "react";
import authService from "../Appwrite/auth";

// Register.jsx
// Tailwind CSS required in your project.
// Drop this component into a page (e.g. App.jsx) and wire up submit handlers yourself.

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // placeholder: validate and call your auth service
        console.log("submit", form);
        authService.createAccount(form)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black p-6">
            {/* subtle background shapes for depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 -top-20 w-[420px] h-[420px] bg-gradient-to-tr from-pink-600/20 to-rose-400/10 rounded-full blur-3xl transform rotate-12" />
                <div className="absolute -right-24 bottom-0 w-[560px] h-[560px] bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: visual / marketing */}
                <section className="hidden md:flex flex-col justify-center pl-8 pr-4">
                    <h2 className="text-4xl font-extrabold text-white/95 leading-tight mb-4">Join the community</h2>
                    <p className="text-lg text-white/70 mb-6">Create an account to access exclusive features, manage your profile and save preferences.</p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm">✓</span>
                            <div>
                                <div className="text-white/90 font-semibold">Fast onboarding</div>
                                <div className="text-white/60 text-sm">Sign up in under a minute with secure flows.</div>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm">🔒</span>
                            <div>
                                <div className="text-white/90 font-semibold">Secure by default</div>
                                <div className="text-white/60 text-sm">We recommend strong passwords and verified sessions.</div>
                            </div>
                        </li>
                    </ul>

                </section>

                {/* Right: glass form card */}
                <main className="relative p-6 md:p-10">
                    <div className="mx-auto max-w-md">
                        <div className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Create account</h3>
                                    <p className="text-sm text-white/60">Start your free trial — no credit card required.</p>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center">
                                    {/* simple logo */}
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeOpacity="0.7" strokeWidth="1.2" />
                                        <path d="M7 12h10" stroke="white" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-white/70 mb-2">Full name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/8 bg-white/4 backdrop-blur-sm px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="Jane Doe"
                                        aria-label="Full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-2">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/8 bg-white/4 backdrop-blur-sm px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="you@company.com"
                                        aria-label="Email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-xs font-medium text-white/70 mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-white/8 bg-white/4 backdrop-blur-sm px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
                                            placeholder="Create a strong password"
                                            aria-label="Password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(s => !s)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white/60 px-2 py-1 rounded"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirm" className="block text-xs font-medium text-white/70 mb-2">Confirm password</label>
                                    <input
                                        id="confirm"
                                        name="confirm"
                                        type="password"
                                        value={form.confirm}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-white/8 bg-white/4 backdrop-blur-sm px-4 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="Confirm password"
                                        aria-label="Confirm password"
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <label className="inline-flex items-center gap-2 text-sm text-white/70">
                                        <input type="checkbox" className="accent-indigo-500" />
                                        <span>Remember me</span>
                                    </label>

                                    <a href="#" className="text-sm text-indigo-300 hover:underline">Need help?</a>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg py-2.5 font-semibold text-white shadow-sm transition-transform active:scale-95 bg-gradient-to-r from-indigo-500 to-purple-500"
                                    >
                                        Create account
                                    </button>
                                </div>

                                <div className="pt-2">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden>
                                            <div className="w-full border-t border-white/8" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white/6 px-3 text-white/70">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="mt-3 grid grid-cols-3 gap-3">
                                        <button type="button" aria-label="Continue with Google" className="rounded-lg border border-white/8 bg-white/4 py-2 flex items-center justify-center text-sm">
                                            {/* Google icon */}
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2">
                                                <path d="M21 12.1c0-.7-.1-1.3-.3-1.9H12v3.6h4.7C16.5 15 14.6 16.3 12 16.3c-2.6 0-4.8-1.6-5.6-3.8H3.5v2.4C4.9 19.5 8 21 12 21c4.6 0 8-3.5 9-8.9z" fill="white" fillOpacity="0.9" />
                                            </svg>
                                            Google
                                        </button>

                                        <button type="button" aria-label="Continue with GitHub" className="rounded-lg border border-white/8 bg-white/4 py-2 flex items-center justify-center text-sm">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2">
                                                <path d="M12 .5C5.7.5.9 5.3.9 11.5c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.1c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 1.6 2.6 1.2 3.2.9.1-.8.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1-3-.1-.3-.4-1.5.1-3.1 0 0 .8-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.5 1.6.2 2.8.1 3.1.7.9 1 1.9 1 3 0 4.2-2.6 5.1-5.1 5.4.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.1 5.3 18.3.5 12 .5z" fill="white" fillOpacity="0.9" />
                                            </svg>
                                            GitHub
                                        </button>

                                        <button type="button" aria-label="Continue with Twitter" className="rounded-lg border border-white/8 bg-white/4 py-2 flex items-center justify-center text-sm">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2">
                                                <path d="M20 7.5c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C16.7 6 15.8 5.5 14.7 5.5c-1.7 0-3 1.4-3 3.1 0 .2 0 .5.1.7-2.5-.1-4.7-1.4-6.1-3.3-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.4 1.9 3-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.1 3.9-.4.1-.8.1-1.2.1-.3 0-.7 0-1-.1.7 2.1 2.6 3.6 4.9 3.7-1.8 1.4-4 2.1-6.4 2.1-.4 0-.8 0-1.2-.1 2.4 1.6 5.3 2.6 8.4 2.6 10.1 0 15.6-8.9 15.6-16.6v-.8c1.1-.8 2-1.7 2.8-2.7-.9.4-1.8.6-2.8.7z" fill="white" fillOpacity="0.9" />
                                            </svg>
                                            Twitter
                                        </button>
                                    </div>
                                </div>

                                <p className="text-xs text-white/60 text-center pt-3">
                                    By creating an account you agree to our <a className="underline text-indigo-300" href="#">Terms</a> and <a className="underline text-indigo-300" href="#">Privacy Policy</a>.
                                </p>

                            </form>
                        </div>

                        {/* small footer */}
                        <div className="mt-4 text-xs text-white/50 text-center">
                            Already have an account? <a href="#" className="text-indigo-300 underline">Sign in</a>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
}
