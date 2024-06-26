import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Concept from "../assets/concept.png";
import { FaApple } from "react-icons/fa";
import GoogleLogo from "../assets/googleLogo.svg";
import { FaGithub } from "react-icons/fa";
import Header from "../components/Header";

const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative z-10">
      <Header />
      <div className="mt-4 w-full min-h-screen flex items-center flex-col md:flex-row-reverse lg:flex-row-reverse bg-[#f3f4f6]">
        <div className="w-full md:w-[70%] lg:w-[50%] h-full md:h-screen lg:h-screen m-4 flex justify-center items-center">
          <form
            className="flex flex-col w-[80%] h-full rounded-2xl p-12 gap-8 bg-white shadow-cyan-500/50 drop-shadow-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full text-center text-3xl font-bold">
              <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 uppercase">
                Welcome Back!
              </h1>
            </div>
            <input
              type="email"
              name="email"
              placeholder="You@example.com"
              className="p-3 border rounded-xl"
              {...register("email", { required: "Email Address is required!" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.email && (
              <p
                className="mt-[-30px] md:mt-[-40px] lg:mt-[-30px] text-[15px] text-red-500"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
            <input
              className="p-3 border rounded-xl"
              type="password"
              name="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password is required!",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.password && (
              <p
                className="mt-[-30px] md:mt-[-30px] lg:mt-[-30px] text-[15px] text-red-500"
                role="alert"
              >
                {errors.password.message}
              </p>
            )}
            <div className="w-full flex flex-col items-center gap-[10px]">
              <button
                type="submit"
                className="w-[100%] uppercase text-white bg-gradient-to-r from-purple-500 to-blue-400 p-3 rounded-full shadow-cyan-500/50 drop-shadow-md"
              >
                Login
              </button>
              <div className="flex flex-row justify-between w-full text-[15px] mb-4 mt-2">
                <p className="text-xs lg:text-[13px]">
                  Don have an account?{" "}
                  <Link
                    to="/sign-up"
                    className="text-purple-500 underline underline-offset-4"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="text-black underline underline-offset-4 text-xs lg:text-[13px]">
                  <Link to="/forget-password ">Forget password?</Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-[80%] mt-8 flex flex-row items-center gap-1 justify-center text-black bg-white p-2 rounded-full shadow-cyan-500/50 drop-shadow-md"
              >
                <img src={GoogleLogo} className="w-6" />
                Sign in with Google
              </button>
              <button
                type="submit"
                className="w-[80%] flex flex-row items-center gap-1 justify-center text-white bg-black p-2 rounded-full shadow-cyan-500/50 drop-shadow-md"
              >
                <FaApple style={{ width: "30px", height: "20px" }} />
                Sign in with Apple
              </button>
              <button
                type="submit"
                className="w-[80%] flex flex-row items-center gap-1 justify-center text-white bg-black p-2 rounded-full shadow-cyan-500/50 drop-shadow-md"
              >
                <FaGithub style={{ width: "30px", height: "20px" }} />
                Sign in with Github
              </button>
            </div>
          </form>
        </div>
        <div className="w-[70%] md:w-[40%] lg:w-[40%] m-4">
          <img src={Concept} />
        </div>
      </div>
    </div>
  );
};

export default Login;
