import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4">
      <main className="w-full h-4/5 max-w-[400px] p-8 shadow-[0_0_10px_rgba(0,0,0,0.384)] flex flex-col justify-center items-stretch gap-4 ">
        <h1 className="text-2xl font-light text-center uppercase">Login</h1>
        <div className="flex flex-col items-stretch justify-start w-full gap-1">
          <label>Gender</label>
          <select
            className="w-full p-4 bg-inherit border border-solid border-[rgba(162,162,162,0.53)] rounded-md font-['Segoe UI',Tahoma,Geneva,Verdana,sans-sarif]   "
            name=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id=""
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            className="w-full p-4 bg-inherit border border-solid border-[rgba(162,162,162,0.53)] rounded-md font-['Segoe UI',Tahoma,Geneva,Verdana,sans-sarif]   "
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p className="m-8 text-center">Already Signed In Once</p>
          <button className="w-[70%] m-auto h-12 cursor-pointer bg-[rgba(62,125,242)] text-white flex flex-row justify-center items-center gap-4 border border-solid border-[rgba(62,125,242)] rounded-md text-[1.05rem]">
            <FcGoogle className="w-[30%] h-full bg-white " />{" "}
            <span className="w-full text-center">Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
