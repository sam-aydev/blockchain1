"use client"
import NavBar from "@/components/ui/Navbar";
import Link from "next/link";
import { login } from "@/lib/actions";
import AuthButton from "@/components/ui/AuthButton";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter()
  const {data: session, status} = useSession()

  const credentialsAction = async (formData: FormData | any ) => {
    console.log(formData)
   await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: "https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev/dashboard",
      callbackUrl: "https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev/dashboard"
    })

  }
  if(status=== "authenticated") router.push("/dashboard")
 
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
                  Email
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
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className="border-2 border-blue-200 p-2 rounded w-full"
                />
              </div>

              <button className="" type="submit">SIgnin</button>
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
