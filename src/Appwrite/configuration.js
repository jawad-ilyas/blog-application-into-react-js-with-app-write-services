import { Client, Databases, Storage, ID, Query } from "appwrite";
import config from "../config/Config";

class Services {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.VITE_APPWRITE_API_URL)
      .setProject(config.VITE_APPWRITE_PROJECT_ID);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Create a new post
  async createPost({ title, slug, UserId, status, featuredImage, content }) {
    try {
      const result = await this.databases.createDocument(
        config.VITE_APPWRITE_DATABASE,
        config.VITE_APPWRITE_COLLECTION,
        ID.unique(),
        {
          title,
          slug,
          UserId,
          status,
          featuredImage,
          content,
        }
      );

      console.log("Post created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  // Update post
  async updatePost(documentId, { title, status, featuredImage, content }) {
    try {
      const result = await this.databases.updateDocument(
        config.VITE_APPWRITE_DATABASE,
        config.VITE_APPWRITE_COLLECTION,
        documentId,
        {
          title,
          status,
          featuredImage,
          content,
        }
      );

      console.log("Post updated successfully:", result);
      return result;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  // Delete post
  async deletePost(documentId) {
    try {
      const result = await this.databases.deleteDocument(
        config.VITE_APPWRITE_DATABASE,
        config.VITE_APPWRITE_COLLECTION,
        documentId
      );

      console.log("Post deleted successfully:", result);
      return result;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  }

  // Get single post
  async getPost(documentId) {
    try {
      const result = await this.databases.getDocument(
        config.VITE_APPWRITE_DATABASE,
        config.VITE_APPWRITE_COLLECTION,
        documentId
      );
      return result;
    } catch (error) {
      console.error("Error getting post:", error);
      throw error;
    }
  }

  // Get all posts (active by default)
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const result = await this.databases.listDocuments(
        config.VITE_APPWRITE_DATABASE,
        config.VITE_APPWRITE_COLLECTION,
        queries
      );
      return result;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  // ===== File Storage Services =====

  // Upload file
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.VITE_APPWRITE_BUCKETS,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  // Delete file
  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(
        config.VITE_APPWRITE_BUCKETS,
        fileId
      );
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  }

  // Get file preview
  async filePreview(fileId) {
    try {
      const result = await this.storage.getFilePreview(
        config.VITE_APPWRITE_BUCKETS,
        fileId
      );
      return result;
    } catch (error) {
      console.error("Error getting file preview:", error);
      throw error;
    }
  }
}

const services = new Services();
export default services;
