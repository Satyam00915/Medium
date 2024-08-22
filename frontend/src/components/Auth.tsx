import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { SignUpInput } from "@satyam0915/mediumcommon";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [showPassword, setShowpassword] = useState(false);
  const [postinputs, setPostinputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}`,
        postinputs
      );
      const jwt = response.data.token;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      } else {
        alert("User Not Found!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col relative left-40 lg:left-0 items-center p-5 gap-8 lg:w-1/2">
      <div className="font-bold text-5xl">
        {type == "signin" ? "Login" : "Create an account"}
      </div>
      <div className="text-lg text-gray-500">
        {type == "signin"
          ? "Don't Have an Account?"
          : "Already have an account?"}{" "}
        <Link
          className="hover:underline"
          to={type == "signin" ? "/signup" : "/signin"}
        >
          {type == "signin" ? "SignUp" : "Login"}
        </Link>
      </div>
      {type == "signup" && (
        <div className="flex flex-col gap-1">
          <label className="text-xl font-semibold">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border border-gray-400 w-[300px] p-2 rounded-md"
            onChange={(e) => {
              setPostinputs({
                ...postinputs,
                name: e.target.value,
              });
            }}
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label className="text-xl font-semibold">Email</label>
        <input
          type="text"
          placeholder="m@example.com"
          className="border border-gray-400 w-[300px] p-2 rounded-md"
          onChange={(e) => {
            setPostinputs({
              ...postinputs,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xl relative left-2 font-semibold">
          Password
        </label>
        <div className="relative left-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password.."
            className="border border-gray-400 w-[300px] p-2 rounded-md"
            onChange={(e) => {
              setPostinputs({
                ...postinputs,
                password: e.target.value,
              });
            }}
          />
          <button
            type="button"
            onClick={() => {
              setShowpassword((c) => !c);
            }}
            className="relative right-6 top-1"
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500 hover:text-gray-700" />
            ) : (
              <FaEye className="text-gray-500 hover:text-gray-700" />
            )}
          </button>
        </div>
      </div>
      <div className="w-[270px]">
        <button
          className="bg-black font-semibold active:opacity-90 text-white p-2 w-full rounded-md"
          onClick={sendRequest}
        >
          {type == "signup" ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
