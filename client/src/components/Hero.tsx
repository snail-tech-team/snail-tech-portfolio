import Image from "next/image";
import ProfilePicture from "../assets/profile_pict2.jpg";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="right md:w-1/3 flex items-center justify-center md:justify-end order-1 md:order-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <Image
            src={ProfilePicture}
            width={400}
            height={400}
            alt="Profile Picture"
            className="relative rounded-3xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-500"
            priority={true}
          />
        </div>
      </div>

      <div className="left w-full md:w-2/3 order-2 md:order-1">
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-4"></div>
            <p
              style={{ fontWeight: 200, letterSpacing: 3 }}
              className="text-sm font-bold text-gray-600 uppercase tracking-wider"
            >
              Hello, My Name Is
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Marco
            </span>{" "}
            <span className="text-gray-800">Abel</span>
          </h1>

          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-700 font-semibold text-sm">
                Full Stack Developer
              </span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Full Stack Developer experienced in building ERP systems, AI-powered
            recruitment platforms, and Python-based computer vision
            applications. Skilled in Next.js, TypeScript, and Python, with a
            strong foundation in QA (white-box testing using C). Focused on
            delivering scalable, user-focused solutions with clean and
            maintainable code.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="cursor-pointer border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
