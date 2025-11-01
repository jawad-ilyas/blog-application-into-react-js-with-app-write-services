import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 z-50">
            {/* Glass Card */}
            <div className="relative p-10 rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 shadow-2xl flex flex-col items-center justify-center">
                {/* Rotating Ring */}
                <div className="w-16 h-16 border-4 border-t-transparent border-gray-900 dark:border-white rounded-full animate-spin"></div>

                {/* Logo Text */}
                <h2 className="mt-5 text-2xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                    Loading Blog...
                </h2>

                {/* Subtext animation */}
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm animate-pulse">
                    Fetching the latest articles ✍️
                </p>

                {/* Floating Dots */}
                <div className="absolute -bottom-4 flex space-x-2">
                    <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce delay-200"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
