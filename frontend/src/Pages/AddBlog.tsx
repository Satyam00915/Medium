import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const AddBlog = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${BACKEND_URL}/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      setTitle("");
      setContent("");
      alert("Blog post created successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error creating blog post:", error);
      alert("There was an error creating the blog post.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Create a New Blog Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        <div className="mb-6">
          <label className="block text-2xl font-semibold text-gray-700 mb-4">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 text-xl border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-2xl font-semibold text-gray-700 mb-4">
            Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="w-full rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-4 text-xl font-semibold rounded-lg transition-colors duration-200 ${
            loading
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
