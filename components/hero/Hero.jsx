import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <>
      <section className="bg-gray-100 ">
        <div
          style={{
            backgroundImage: "url('/assets/resume-example.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h1
              className="text-6xl font-bold text-[#ffffff] mb-2"
              style={{ textShadow: "2px 3px 15px rgba(5, 227, 250, 5)" }}
            >
              Free Resume Maker <br />
              <span className="text-white">
                <Typewriter
                  words={[
                    "Optimized",
                    "Perfect",
                    "Professional",
                    "ATS-friendly",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />
              Resume.
            </h1>

            <br></br>
            <Link
              href="/builder"
              className="relative bg-neutral-500 text-white px-6 py-3 rounded-[1vw] font-bold text-lg transition duration-200 hover:bg-white hover:text-gray-800 transform hover:shadow-lg flex gap-6 justify-between items-center overflow-hidden"
            >
              {/* Rotating Border & Shadow */}
              <span className="absolute inset-0 rounded-[1vw] border-2 border-transparent animate-border-spin before:absolute before:ring-offset-[5px] before:rounded-[1vw] before:border-[3px] before:border-cyan-400 before:animate-border-shadow"></span>

              <span className="relative z-10">Make My Resume</span>
              <FaArrowRight className="relative z-10" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
