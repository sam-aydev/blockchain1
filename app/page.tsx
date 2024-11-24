import Image from "next/image";
import { HiBars3, HiDocument } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="p-3 ">
      <header className="bg-gradient-to-tr from-yellow-200 to-purple-200  rounded-lg">
        <nav className="p-4 ">
          <div className="bg-white p-3 flex justify-between items-center rounded-md">
            <div>
              <h2 className="font-bold text-2xl ">IntraDocs</h2>
            </div>
            <div>
              {" "}
              <HiBars3 size={28} />{" "}
            </div>
          </div>
        </nav>
        <div className="text-center mt-10 px-4 pb-20">
          <h2 className="text-3xl font-bold">
            Revolutionize Your Document With Ease
          </h2>
          <p className="mt-4">
            Smart, secure, and efficient document handling for modern businesses
          </p>
          <button className="bg-black p-3 font-semibold text-white mt-3 rounded-md">
            Get Started
          </button>
        </div>
      </header>

      <section className="bg-slate-200 rounded-lg mt-2 p-4">
        <div className="font-bold text-2xl">
          Everything You Need To Simplify Your Workflow
        </div>
        <p className="mt-3">
          <HiDocument />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora itaque deserunt! consectetur adipisicing elit. Reiciendis
          tempora itaque, itaque deserunt! consectetur adipisicing elit.
          Reiciendis tempora itaque.
        </p>

        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora itaque deserunt.
        </p>
        <button className="bg-black text-white p-2 mt-4 font-semibold rounded-md">
          Learn More
        </button>
      </section>
    </div>
  );
}
