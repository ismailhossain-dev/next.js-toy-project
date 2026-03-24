// app/login/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { SocialButton } from "./SocialButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //route check, kon route teke login page asche seta dekbe
  const params = useSearchParams();
  //console.log(params.get("callbackUrl") || "/");
  //Register er jorno
  const callBack = params.get("callbackUrl") || "";
  console.log(callBack);
  const router = useRouter();

  //React hook form use
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = async (data) => {
    //inputting the signin from nextAuth/client Api/Specifying a callbackUrl etate gele dekte pabo custom page set korar jorno nextAuth form take ki ki jinish dithe hoy
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      //redirect use korle nextAuth custom page nive na .
      redirect: false,
    });
    // console.log(result);
    //user jodi google diye login kore and jodi abr login form diye login korthe chai tokon user ke eta dekabe
    if (!result.ok) {
      Swal.fire("error", "Email password not matched, Try Google Login / Register", "error");
    } else {
      Swal.fire("success", "Welcome to ToyBazaar", "success");
      router.push(callBack);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email@example.com"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 my-2">Email is required</p>
              )}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                name="password"
                placeholder="••••••••"
                className="input input-bordered"
              />

              <span
                className="absolute top-8 right-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-red-500 my-2">Password is required</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <SocialButton />

          <p className="text-center text-sm mt-4">
            New here?
            {/* Callback use korsi kon page teke register page aschi seta dekar jorno */}
            <a href={`/register?callbackUrl=${callBack}`} className="link link-primary">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
