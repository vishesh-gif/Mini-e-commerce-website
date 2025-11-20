import React, { useRef, useState } from "react";
import { LogoImg } from "../utils/url";

const Profile = () => {
  const [user, setUser] = useState({});
  const Inputs = [
    "Enter your Full Name",
    "Phone Number",
    "Enter Your Email",
    "Create Password",
  ];
  const userRef = useRef([]);
  const handleSubmit = () => {
    console.log(userRef.current.map((info) => info.value));
  };

  return (
    <div className="flex justify-center items-center p-3 my-4 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 items-center justify-center bg-gray-300 p-8 rounded-lg"
      >
        <div className="flex items-center flex-col">
          <img
            src={LogoImg}
            className="w-20 self-center rounded-full "
            alt=""
          />
          <h3 className="text-gray-600">Create Account</h3>
        </div>

        {Inputs.map((Input, index) => (
          <input
            key={index}
            type="text"
            ref={(el) => (userRef.current[index] = el)}
            placeholder={Input}
            className="px-4 py-3 mx-4 text-xl focus:outline-gray-500 focus:outline-offset-2 focus:border-0 rounded-lg border-gray-400 border"
          />
        ))}
        <button
          onClick={() => handleSubmit()}
          className="bg-gray-500 px-5 py-2 rounded-lg hover:bg-gray-800 cursor-pointer hover:text-white duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
