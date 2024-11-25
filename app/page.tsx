import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import FirstImage from "@/app/assets/img2.jpg";
import ThirdImage from "@/app/assets/img3.webp";
import { MdFileUpload } from "react-icons/md";
import { GiExtractionOrb } from "react-icons/gi";
import { CgSearchFound } from "react-icons/cg";
import { PiGoogleDriveLogo } from "react-icons/pi";

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
          <button className="hover:bg-slate-800 bg-black p-3 font-semibold text-white mt-3 rounded-md">
            Get Started
          </button>
        </div>
      </header>

      <section className="bg-slate-200 rounded-lg mt-2 p-4">
        <div>
          <Image
            src={FirstImage}
            width={500}
            height={500}
            alt="img2"
            className="w-full h-56 my-5 shadow-white rounded-md shadow-2xl mx-auto"
          />
          <h2 className="font-bold text-3xl ">
            Everything You Need To Simplify Your Workflow
          </h2>
          <p className="mt-3">
            IntraDocs is a powerful and intuitive smart document management
            platform designed to simplify how businesses and individuals handle
            documents. With features like secure{" "}
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

        <div>
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
            Effortless Document Management In Three Steps:
          </h2>
          <p className="mt-3">
            IntraDocs is a powerful and intuitive smart document management
            platform designed to simplify how businesses and individuals handle
            documents. With features like secure{" "}
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

        <div>
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
    </div>
  );
}
