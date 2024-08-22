// Function to generate a random color based on the author's name
const getRandomColor = (name: string) => {
  const colors = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#F8E16C",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

interface BlogCardProps {
  author: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({ author, title, content, publishedDate }: BlogCardProps) => {
  const avatarColor = getRandomColor(author);

  return (
    <div className="w-[650px] flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex gap-4 items-center">
        <div className="avatar placeholder">
          <div
            style={{ backgroundColor: avatarColor }}
            className="text-black w-8 rounded-full "
          >
            <span className="text-xl text-white relative bottom-1">
              {author.split("")[0]}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg">{author}</div>
          <div className="text-md text-gray-500">
            {publishedDate.split("T")[0]}
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-2">{title}</div>
        <div
          className="font-semibold text-lg text-slate-600 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
