import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
import BlogCardSkeleton from "../Skeleton/Blogskeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <div>
      <Appbar />
      <div className="flex flex-col gap-8 justify-center items-center m-5">
        {loading ? (
          <>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </>
        ) : (
          blogs.map((blog) => {
            return (
              <BlogCard
                id={blog.id}
                title={blog.title}
                content={blog.content}
                author={blog.author.name}
                publishedDate={blog.createdAt}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blogs;
