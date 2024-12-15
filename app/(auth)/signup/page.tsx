"use client"
import NavBar from "@/components/ui/Navbar";
import { registerUser } from "@/lib/actions";
import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-yellow-200 to-purple-200 h-screen">
        <NavBar />
        <div className="p-3 ">
          <div className="bg-white w-full rounded-2xl p-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 sm:mx-auto">
            <h2 className="text-3xl w-3/4 mx-auto font-bold text-center">
              Create Your Account
            </h2>
            <form action={registerUser} className="w-full mt-5">
              <div className="w-full">
                <label htmlFor="name" className="block font-semibold py-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  className="border-2 border-blue-200 p-2 rounded w-full"
                />
              </div>
              <div className="w-full mt-2">
                <label htmlFor="email" className="block font-semibold py-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  className="border-2 border-blue-200 p-2 rounded w-full"
                />
              </div>

              <div className="w-full mt-2">
                <label htmlFor="password" className="block font-semibold py-2">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className="border-2 border-blue-200 p-2 rounded w-full"
                />
              </div>

              <div className="mt-2 w-full">
                <label
                  htmlFor="confirm_password"
                  className="block font-semibold py-2"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm password..."
                  className="border-2 border-blue-200 p-2 rounded w-full"
                />
              </div>
              <button className="w-full py-2 text-white font-semibold bg-black rounded mt-2">
                Register My Account!
              </button>
              <p>
                I already have an account?{" "}
                <Link href="/login">
                  <span className="hover:text-slate-400 duration-300 transition-all">
                    {" "}
                    login here!
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
