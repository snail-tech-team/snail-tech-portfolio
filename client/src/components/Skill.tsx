import { SKILL_CATEGORIES } from "@/constants/data";
import Image from "next/image";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Skill() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
          <p
            style={{ fontWeight: 200, letterSpacing: 3 }}
            className="text-blue-700 font-bold uppercase tracking-wider"
          >
            Skills
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Technical Expertise
        </h2>
      </div>

      <div className="space-y-8">
        {SKILL_CATEGORIES.map((category, categoryIdx) => (
          <div
            key={categoryIdx}
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="group relative bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  ></div>
                  <div className="relative text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <Image
                        src={`/skills/${skill.icon}`}
                        alt={skill.name}
                        width={12}
                        height={12}
                        style={{ height: "auto", width: "auto" }} // menjaga rasio
                      />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
