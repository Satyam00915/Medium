const BlogCardSkeleton = () => {
  return (
    <div className="w-[650px] flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200 animate-pulse">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="w-16 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-6 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
