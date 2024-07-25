import Image from "next/image";
import ProfilePicture from "../assets/profile_pict.jpg";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-10">
      <div className="right md:w-1/3 flex items-center justify-center md:justify-end order-1 md:order-2">
        <Image src={ProfilePicture} width={400} height={400} alt="Profile Picture" className="rounded-lg" priority={true} />
      </div>
      <div className="left bg-slate-100 w-full md:w-2/3 flex flex-col justify-center p-4 rounded-lg order-2 md:order-1">
        <div className="flex items-center">
          <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
            HELLO, MY NAME IS
          </p>
        </div>
        <span className="text-2xl font-bold mt-2 text-sky-700">
          Marco <span className="text-black">Abel</span>
        </span>
        <p className="mt-4 text-justify">
          Passionate programmer with a strong foundation in web development and mobile applications. Experienced as a Quality Assurance Engineer (White box) using <b>C</b> Language for two years, specializing in high-quality standards for
          automatic car transmission systems. Known for excellent communication, teamwork, problem-solving skills, and attention to detail. Recently completed the Hacktiv8 bootcamp as a Full Stack <b>JavaScript</b> developer, transitioning
          from quality assurance to pursue a lifelong passion for technology, particularly in web development.
        </p>
      </div>
    </div>
  );
}
