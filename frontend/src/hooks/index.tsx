import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: string;
  createdAt: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.allBlogs);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/unique/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blog,
  };
};
