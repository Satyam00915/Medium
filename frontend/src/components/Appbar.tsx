import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-gray-300 flex justify-between items-center p-3">
      <div className="text-2xl font-semibold">Medium</div>
      <div className="flex items-center gap-5">
        <div>
          <button
            onClick={() => {
              navigate("/blog/create");
            }}
            className="btn btn-outline btn-accent"
          >
            Create
          </button>
        </div>
        <div className="avatar placeholder">
          <div className="text-black w-8 h-8 bg-neutral rounded-full">
            <span className="text-lg text-white">
              {localStorage.getItem("User")?.split("")[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
