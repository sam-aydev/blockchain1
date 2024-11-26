import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import FirstImage from "@/app/assets/img2.jpg";
import ThirdImage from "@/app/assets/img3.webp";
import { MdFileUpload } from "react-icons/md";
import { GiArtificialIntelligence, GiExtractionOrb } from "react-icons/gi";
import { CgSearchFound } from "react-icons/cg";
import { PiGoogleDriveLogo } from "react-icons/pi";
import { TbFileUpload } from "react-icons/tb";
import { FcAutomatic } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  return (
    <div className="p-3 ">
      <header className="bg-gradient-to-tr from-yellow-200 to-purple-200  rounded-lg">
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
                <li className="bg-slate-200 hover:bg-slate-600 hover:text-white transform  transition-all duration-300 rounded-md p-2 cursor-pointer text-black">
                  Login
                </li>
                <li className="hover:bg-slate-600 hover:text-black transform  transition-all duration-300 bg-black rounded-md p-2 cursor-pointer text-white">
                  Sign up
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-center mt-10 px-4 pb-20 md:w-2/3 md:mx-auto">
          <h2 className="text-3xl font-bold  lg:text-5xl xl:text-6xl">
            Revolutionize Your Document With Ease
          </h2>
          <p className="mt-4 md:w-1/2 md:mx-auto lg:text-xl">
            Smart, secure, and efficient document handling for modern businesses
          </p>
          <button className="hover:bg-slate-800 bg-black p-3 font-semibold text-white mt-3 rounded-md">
            Get Started
          </button>
        </div>
      </header>

      <section className="bg-slate-200 rounded-lg mt-2 p-4  md:pb-14">
        <div className="md:flex md:pt-10 md:justify-around md:items-center md:space-x-8 lg:space-x-14">
          <div className="md:w-1/2">
            <Image
              src={FirstImage}
              width={500}
              height={500}
              alt="img2"
              className="lg:h-[280px] lg:w-[400px] w-full h-56 my-5 shadow-white rounded-md shadow-2xl mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-3xl ">
              Everything You Need To Simplify Your Workflow
            </h2>
            <p className="mt-3">
              IntraDocs is a powerful and intuitive smart document management
              platform designed to simplify how businesses and individuals
              handle documents. With features like secure{" "}
              <span className="font-bold">
                {" "}
                document storage, AI-driven text extraction, categorization,
                advanced search{" "}
              </span>
              , and seamless{" "}
              <span className="font-bold">Google Drive integration</span>.
            </p>

            <p className="mt-3">
              Built with robust{" "}
              <span className="font-bold">user-based access control</span> , it
              prioritizes security and collaboration, making it the perfect
              solution for professionals, teams, and enterprises looking to
              streamline their workflows.
            </p>
            <button className="bg-black text-white p-2 mt-4 font-semibold rounded-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:mt-20 md:grid md:grid-cols-2 md:place-items-center md:gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-lg -mt-4">
              <MdFileUpload size={25} />
            </div>
            <div className="mt-3 flex flex-col space-y-1">
              <p className="font-bold text-lg">Document upload and storage</p>
              <p>
                Seamlessly upload your files and store them securely in the
                cloud with unlimited scalability
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-lg -mt-4">
              <GiExtractionOrb size={25} />
            </div>
            <div className="mt-3 flex flex-col space-y-1">
              <p className="font-bold text-lg">
                Text Extraction From Images/PDFs
              </p>
              <p>
                We turn your scanned documents into searchable text with
                advanced OCR technology.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-lg -mt-4">
              <CgSearchFound size={25} />
            </div>
            <div className="mt-3 flex flex-col space-y-1">
              <p className="font-bold text-lg">Advance Search Functionality</p>
              <p>
                Find what you need in seconds with our advance powerful filters
                and AI-driven search tools.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-lg -mt-4">
              <PiGoogleDriveLogo size={25} />
            </div>
            <div className="mt-3 flex flex-col space-y-1">
              <p className="font-bold text-lg">Integration with Google Drive</p>
              <p>
                You will be able to connect seamlessly to Google Drive for
                productivity and file sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Section */}

      <section className="bg-slate-200 rounded-lg mt-2 p-4">
        <div>
          <Image
            src={ThirdImage}
            width={500}
            height={500}
            alt="img2"
            className="w-full h-56 my-5 shadow-white rounded-md shadow-2xl mx-auto"
          />
          <h2 className="font-bold text-3xl ">
            How To Manage Your Document Effortlessly:
          </h2>
        </div>

        <div>
          <div className="flex flex-col items-center text-center mt-5">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-full ">
              <TbFileUpload size={25} />
            </div>
            <div className="mt-3 ">
              <p className="font-bold text-lg">Upload Your File</p>
              <p>Drag and drop your docuemnt or connect with Google Drive</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-5">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-full ">
              <GiArtificialIntelligence size={25} />
            </div>
            <div className="mt-3 ">
              <p className="font-bold text-lg">Let our AI work for you</p>
              <p>
                Categorization, extraction and organisation of file will be done
                automatically.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-5">
            <div className="bg-white drop-shadow-xl  p-2 w-fit rounded-full ">
              <BiSearch size={25} />
            </div>
            <div className="mt-3 ">
              <p className="font-bold text-lg">Search And Access Anytime</p>
              <p>
                Use smart files and advanced search to retrieve files instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black rounded-lg mt-2 py-10">
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg">Links</h3>
          <p className="text-slate-400 text-sm mt-2">Features</p>
          <p className="text-slate-400 text-sm mt-2">Pricing</p>
          <p className="text-slate-400 text-sm mt-2">API</p>
          <p className="text-slate-400 text-sm mt-2">Sign up</p>
          <p className="text-slate-400 text-sm mt-2">Log in</p>
        </div>
        <div className="text-center mt-7">
          <h3 className="text-white font-semibold text-lg">Company</h3>
          <p className="text-slate-400 text-sm mt-2">About us</p>
          <p className="text-slate-400 text-sm mt-2">Privacy Policy</p>
          <p className="text-slate-400 text-sm mt-2">Terms of service</p>
          <p className="text-slate-400 text-sm mt-2">Contact us</p>
        </div>
        <div className="mt-7 text-white text-center">
          <h2 className=" font-bold tex-2xl">IntraDocs</h2>
          <p>@2024 IntraDocs, lnc.</p>
        </div>
      </footer>
    </div>
  );
}
