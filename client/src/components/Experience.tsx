import { EXPERIENCES } from "@/constants/data";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Experience() {
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
            Experience
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Professional Journey
        </h2>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((experience, idx) => (
          <div key={idx} className="relative">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="text-4xl bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {experience.office}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                      <p className="text-gray-600 font-medium">
                        {experience.projects.length} Project
                        {experience.projects.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📅</div>
                    <p className="text-blue-700 font-bold whitespace-nowrap">
                      {experience.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {experience.projects.map((project, projectIdx) => (
                  <div key={projectIdx} className="relative">
                    {/* Project Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                        <h4 className="text-xl font-bold text-gray-800">
                          {project.position}
                        </h4>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-gray-700 leading-relaxed italic font-medium">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Project Tasks */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                        Key Responsibilities & Achievements
                      </h5>
                      <div className="space-y-3 ml-4">
                        {project.tasks.map((task, taskIdx) => (
                          <div
                            key={taskIdx}
                            className="flex items-start gap-3 group/task"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover/task:scale-125 transition-transform duration-200"></div>
                            <p className="text-gray-700 leading-relaxed group-hover/task:text-gray-900 transition-colors">
                              {task}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Separator (if not last project) */}
                    {projectIdx < experience.projects.length - 1 && (
                      <div className="mt-8 pt-6 border-t border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
