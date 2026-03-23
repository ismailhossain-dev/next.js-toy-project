"use client";
import { postUser } from "@/actions/server/Auth";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

import Swal from "sweetalert2";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); //Try use react hook form
  const params = useSearchParams();
  const callBack = params.get("/callbackUrl") || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    //src/action/server/auth.js er ekane data sent korechi
    const res = await postUser(data);

    if (res.insertedId) {
      //auto login
      const loginResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (loginResult?.ok) {
        Swal.fire("Success", "Registration successful", "success");
        router.push(callBack);
      }
    } else {
      Swal.fire("Error", "User already exists", "error");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="John Doe"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600 my-2">Name is required</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email@example.com"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 my-2">Email is required</p>
            )}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="••••••••"
              className="input input-bordered"
            />
            {/* ekbar false hobe and ekbar true hobe*/}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 bottom-3 cursor-pointer"
            >
              {showPassword ? <FaRegEye size={20} /> : <FaEyeSlash size={20} />}
            </span>
            {errors.password?.type === "required" && (
              <p className="text-red-600 my-2">Password is required</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
