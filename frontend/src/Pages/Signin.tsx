import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="flex justify-between items-center h-screen w-screen">
      <Auth type="signin" />
      <div className="bg-gray-200 h-screen invisible lg:visible w-1/2 flex justify-center items-center">
        <Quote type="signin" />
      </div>
    </div>
  );
};

export default Signin;
