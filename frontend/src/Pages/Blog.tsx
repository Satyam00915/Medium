import Appbar from "../components/Appbar";
import { useBlog } from "../hooks";
import BlogSkeleton from "../Skeleton/FullBlog";
import { format } from "date-fns";

const Blog = () => {
  const id = window.location.pathname.split("/")[2];
  const { loading, blog } = useBlog({ id });

  return (
    <div>
      <Appbar />
      {loading ? (
        <BlogSkeleton />
      ) : (
        <div className="flex justify-center items-start gap-10 m-2 p-1">
          <div className="flex flex-col gap-5 w-[900px]">
            <div className="text-4xl font-bold">{blog?.title}</div>
            <div className="text-gray-700">
              Posted on{" "}
              {blog?.createdAt
                ? format(new Date(blog?.createdAt), "MMMM d, yyyy")
                : "Unknown date"}
            </div>
            <div
              className="font-semibold text-lg"
              dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-xl text-slate-600">Author</div>
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="text-black w-8 bg-neutral rounded-full">
                  <span className="text-lg text-white">
                    {blog?.author.name.split("")[0]}
                  </span>
                </div>
              </div>
              <div>{blog?.author.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
