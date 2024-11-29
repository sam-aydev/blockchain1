import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

export default function NavBar() {
  return (
    <nav className="p-4 ">
      <div className="bg-white p-3 flex justify-between items-center rounded-md">
        <div>
          <h2 className="font-bold text-2xl ">IntraDocs</h2>
        </div>
        <div className="sm:hidden">
          {" "}
          <HiBars3 size={28} />{" "}
        </div>
        <div className="hidden sm:block">
          <ul className="flex font-semibold space-x-4 items-center lg:space-x-8 xl:space-x-12">
            <li className="hover:text-slate-600 cursor-pointer transform  transition-all duration-300">
              Pricing
            </li>
            <li className="hover:text-slate-600 cursor-pointer transform  transition-all duration-300">
              Blog
            </li>
            <Link href={`/login`}>
              <li className="bg-slate-200 hover:bg-slate-400  transform  transition-all duration-300 rounded-md p-2 cursor-pointer text-black">
                Login
              </li>
            </Link>
            <Link href={`/signup`}>
              <li className="hover:bg-slate-600 transform  transition-all duration-300 bg-black rounded-md p-2 cursor-pointer text-white">
                Sign up
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
