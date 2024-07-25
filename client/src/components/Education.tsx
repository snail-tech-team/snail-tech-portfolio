import { useOnScreen } from "../hooks/useOnScreen";

export default function Education() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref as any} className={`transition-opacity duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
        Educations
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-slate-100 p-4 rounded-lg shadow-xl flex mb-3">
          <div className="left w-1/2">
            <h2 className="text-xl font-bold">Hacktiv8 Bootcamp</h2>
            <p className="text-gray-500">FullStack JavaScript</p>
            <p className="text-gray-400">Final Score: 94 / 100</p>
          </div>
          <div className="text-right w-1/2">
            <p className="text-gray-500 font-extrabold">March 2024 - July 2024</p>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg shadow-xl flex mb-3">
          <div className="left w-1/2">
            <h2 className="text-xl font-bold">Gunadarma University</h2>
            <p className="text-gray-500">Informatic Engineering</p>
            <p className="text-gray-400">GPA: 3.21 / 4.00</p>
          </div>
          <div className="text-right w-1/2">
            <p className="text-gray-500 font-extrabold">2016 - 2020</p>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg shadow-xl flex">
          <div className="left w-1/2">
            <h2 className="text-xl font-bold">Bakti Idhata Senior High School</h2>
            <p className="text-gray-500">IPA</p>
            <p className="text-gray-500">Final Score: 77.8 / 100</p>
          </div>
          <div className="text-right w-1/2">
            <p className="text-gray-500 font-extrabold">2013 - 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
}
