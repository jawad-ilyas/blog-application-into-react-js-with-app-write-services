import React from "react";
import { Link } from "react-router-dom";
import authService from "../../Appwrite/auth";
import services from "../../Appwrite/configuration";

const PostCard = ({ $id, title = "lorem", author = "ipsum", date = "", excerpt = "", featuredImage = "" }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">

                {/* === Image Section === */}
                <div className="w-full h-56 overflow-hidden">
                    <img
                        src={services.filePreview.featuredImage}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* === Content Section === */}
                <div className="p-5 flex flex-col gap-3">
                    {/* === Meta Info === */}
                    <div className="flex items-center justify-between text-sm text-rose-700/70">
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>

                    {/* === Title === */}
                    <h3 className="text-xl font-semibold text-rose-900 leading-snug hover:text-rose-600 cursor-pointer transition">
                        {title}
                    </h3>

                    {/* === Excerpt === */}
                    <p className="text-rose-800/80 text-sm leading-relaxed">
                        {excerpt?.length > 120 ? excerpt.slice(0, 120) + "..." : excerpt}
                    </p>

                    {/* === Read More Button === */}
                    <div className="mt-4">
                        <button className=" cursor-pointer bg-gradient-to-r from-rose-500 to-orange-400 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                            Read More →
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
