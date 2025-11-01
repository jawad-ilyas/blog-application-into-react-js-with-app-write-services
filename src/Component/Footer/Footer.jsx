import React from "react";

export default function Footer() {
    return (
        <footer className="relative mt-20 bg-gradient-to-br from-rose-100/60 via-orange-100/40 to-amber-100/60 backdrop-blur-xl border-t border-white/50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 top-10 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-3xl" />
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-200/30 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-12 text-rose-900 z-10 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* === Column 1: Brand === */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-orange-300 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow">
                            B
                        </div>
                        <h2 className="text-2xl font-serif">BloomBlog</h2>
                    </div>
                    <p className="text-sm text-rose-800/80 leading-relaxed">
                        A cozy space to read, write, and share your stories with the world.
                        Join our growing community of passionate writers.
                    </p>
                </div>

                {/* === Column 2: Explore === */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-800">Explore</h3>
                    <ul className="space-y-2 text-rose-700/80">
                        <li><a href="#" className="hover:text-rose-600 transition">Home</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Categories</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Writers</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Popular Posts</a></li>
                    </ul>
                </div>

                {/* === Column 3: Resources === */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-800">Resources</h3>
                    <ul className="space-y-2 text-rose-700/80">
                        <li><a href="#" className="hover:text-rose-600 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-rose-600 transition">Support</a></li>
                    </ul>
                </div>

                {/* === Column 4: Newsletter === */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-800">Stay Updated</h3>
                    <p className="text-sm text-rose-700/80 mb-3">
                        Subscribe to our newsletter for the latest stories and writing tips.
                    </p>
                    <form className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 rounded-lg bg-white/50 border border-rose-300/50 px-3 py-2 text-rose-900 placeholder-rose-400 focus:ring-2 focus:ring-rose-300 outline-none"
                        />
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-semibold shadow-md hover:opacity-90 transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            {/* === Bottom Section === */}
            <div className="relative border-t border-rose-200/50 mt-10 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-rose-700/80">
                    <p>© {new Date().getFullYear()} <span className="font-semibold">BloomBlog</span>. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-rose-600 transition">Twitter</a>
                        <a href="#" className="hover:text-rose-600 transition">Instagram</a>
                        <a href="#" className="hover:text-rose-600 transition">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
