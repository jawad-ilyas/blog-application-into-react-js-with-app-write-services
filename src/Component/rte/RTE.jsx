import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "../../config/Config"
import { Controller } from "react-hook-form";


const RTE = ({ name, control = "" }) => {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md bg-white/80 backdrop-blur-md p-2">
            <Controller name={name} control={control}
                render={({ field: { onChange } }) => {
                    <Editor
                        apiKey={config.VITE_TINYMCE_API_KEY} // You can replace this with your actual TinyMCE API key
                        initialValue={initialValue}
                        init={{
                            height: 500,
                            menubar: true,
                            skin: "oxide",
                            content_css: "default",
                            placeholder: "Write your amazing blog content here...",
                            branding: false,
                            plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "help",
                                "wordcount",
                            ],
                            toolbar:
                                "undo redo | blocks | bold italic underline forecolor | " +
                                "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | link image media | preview code fullscreen",
                            content_style:
                                "body { font-family: 'Inter', sans-serif; font-size:16px; line-height:1.6; background-color:transparent; }",
                        }}
                        onEditorChange={onChange}
                    />
                }}

            />

        </div>
    );
};

export default RTE;
