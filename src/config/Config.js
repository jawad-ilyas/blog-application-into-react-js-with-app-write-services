const config = {
    VITE_APPWRITE_API_URL: String(import.meta.env.VITE_APPWRITE_API_URL),
    VITE_APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    VITE_APPWRITE_DATABASE: String(import.meta.env.VITE_APPWRITE_DATABASE),
    VITE_APPWRITE_COLLECTION: String(import.meta.env.VITE_APPWRITE_COLLECTION),
    VITE_APPWRITE_BUCKETS: String(import.meta.env.VITE_APPWRITE_BUCKETS),
    VITE_TINYMCE_API_KEY: String(import.meta.env.VITE_TINYMCE_API_KEY),
    
};

export default config;
