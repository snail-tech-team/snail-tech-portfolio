import { useOnScreen } from "../hooks/useOnScreen";

const experiences = [
  {
    office: "PT SYS Indonesia",
    position: "Quality Assurance",
    tasks: [
      "Read and analyzed logic within the source code, identifying, resolved bugs within the source code with established standards and regulations, and debugging the source code to verify output.",
      "Conducted test using the Unit Testing method and implemented developments as required by testing needs. Created Excel formulas based on the source code and comparing output results with winAMS and Excel formulas.",
      "Documented test results based on test cases and report them to the QA Leader.",
      "Doing white box testing for automatic transmission for VW car, BWM car, FIAT car, and SUZUKI car. We must reach 100% precentage from Coverage Testing, and make reporting file",
    ],
    period: "September 2021 - December 2023",
  },
];

export default function Experience() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div ref={ref as any} className={`transition-opacity duration-500  opacity-100 translate-y-0"`}>
      <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
        Experiences
      </p>
      {experiences.map((experience, idx) => (
        <div key={idx} className="grid grid-cols-1 gap-4">
          <div className="bg-slate-100 p-4 rounded-lg shadow-xl flex">
            <div className="left w-2/3">
              <h2 className="text-xl font-bold">{experience.office}</h2>
              <p className="text-gray-500">{experience.position}</p>
              <ul className="ps-5 text-justify">
                {experience.tasks.map((task, idx) => (
                <li key={idx} className="list-disc">
                  <p className="text-gray-400">{task}</p>
                </li>

                ))}
              </ul>
            </div>
            <div className="text-right w-1/3">
              <p className="text-gray-500 font-extrabold">{experience.period}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
