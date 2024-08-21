const Appbar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between p-2">
      <div className="text-2xl font-semibold">Medium</div>
      <div className="avatar placeholder">
        <div className="text-black w-8 bg-neutral rounded-full">
          <span className="text-lg text-white">S</span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
