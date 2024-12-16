"use client"
import NavBar from "@/components/ui/Navbar";
import Link from "next/link";
import { login } from "@/lib/actions";
import AuthButton from "@/components/ui/AuthButton";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Login() {

  const credentialsAction = (formData: FormData ) => {
    signIn("credentials", formData, {
      redirectTo:"/dashboard"
    } )
  }
  return (
    <div> 
      <div className="bg-gradient-to-tr from-yellow-200 to-purple-200 h-screen">
        <NavBar />
        <div className="p-3 mt-20">
          <div className="bg-white w-full rounded-2xl p-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 sm:mx-auto">
            <h2 className="text-3xl w-3/4 mx-auto font-bold text-center">
              Login Now!
            </h2>
            <form action={credentialsAction} className="w-full mt-5">
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

              <input type="submit" value="Sign In" />
              <p>
                I don't have an account yet?{" "}
                <Link href="/signup">
                  <span className="hover:text-slate-400 duration-300 transition-all">
                    {" "}
                    register here!
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
