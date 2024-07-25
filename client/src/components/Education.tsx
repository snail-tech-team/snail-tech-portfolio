import { useOnScreen } from "../hooks/useOnScreen";

const educations = [
  { name: "Hacktiv8", major: "FullStack JavaScript", result: "Final Score: 94 / 100", date: "March 2024 - July 2024" },
  { name: "Gunadarma University", major: "Informatic Engineering", result: "GPA: 3.21 / 4.00", date: "2016 - 2020" },
];

export default function Education() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref as any} className={`transition-opacity duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
        Educations
      </p>
      <div className="grid grid-cols-1 gap-4">
        {educations.map((education, idx) => (
          <div key={idx} className="bg-slate-100 p-4 rounded-lg shadow-xl flex mb-3">
            <div className="left w-1/2">
              <h2 className="text-xl font-bold">{education.name}</h2>
              <p className="text-gray-500">{education.major}</p>
              <p className="text-gray-400">{education.result}</p>
            </div>
            <div className="text-right w-1/2">
              <p className="text-gray-500 font-extrabold">{education.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
