import { useOnScreen } from "../hooks/useOnScreen";

const educations = [
  {
    name: "Hacktiv8",
    major: "FullStack JavaScript",
    result: "Final Score: 94 / 100",
    date: "March 2024 - July 2024",
    icon: "💻",
    status: "Graduated",
    statusColor: "from-green-400 to-green-600",
  },
  {
    name: "Gunadarma University",
    major: "Informatic Engineering",
    result: "GPA: 3.21 / 4.00",
    date: "2016 - 2020",
    icon: "🎓",
    status: "Graduated",
    statusColor: "from-green-400 to-green-600",
  },
];

export default function Education() {
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
            Education
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Academic Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educations.map((education, idx) => (
          <div
            key={idx}
            className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Graduation Badge */}
            <div className="absolute top-0 right-0">
              <div
                className={`bg-gradient-to-r ${education.statusColor} text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md transform rotate-0 translate-x-0 translate-y-0 flex items-center gap-1`}
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                {education.status}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-xl">
                {education.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {education.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {education.major}
                </p>
                <p className="text-gray-600 mb-3">{education.result}</p>
                <div className="inline-block bg-gray-100 rounded-full px-3 py-1">
                  <p className="text-gray-700 font-medium text-sm">
                    {education.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
