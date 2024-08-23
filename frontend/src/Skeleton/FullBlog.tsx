const BlogSkeleton = () => {
  return (
    <div className="flex justify-center items-start gap-10 m-2 p-1">
      <div className="flex flex-col gap-5 w-[900px]">
        <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded-md animate-pulse w-1/3"></div>
        <div className="space-y-4">
          <div className="h-5 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-7 bg-gray-300 rounded-md animate-pulse w-20"></div>
        <div className="flex items-center gap-3">
          <div className="avatar placeholder">
            <div className="h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
          <div className="h-5 bg-gray-200 rounded-md animate-pulse w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
