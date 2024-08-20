import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="flex justify-between items-center h-screen w-screen">
      <Auth type="signup" />
      <div className="bg-gray-200 h-screen invisible lg:visible w-1/2 flex justify-center items-center">
        <Quote type="signup" />
      </div>
    </div>
  );
};

export default Signup;
