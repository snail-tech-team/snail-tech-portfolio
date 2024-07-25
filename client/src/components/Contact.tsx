import { useOnScreen } from "../hooks/useOnScreen";

export default function Contact() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <>
      <div ref={ref as any} className={`transition-opacity duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="pre-title" style={{ fontWeight: 200, letterSpacing: 5 }}>
          Contact
        </p>
        <div className="container mx-auto p-6 bg-slate-100 dark:bg-gray-900 rounded-lg shadow-md">
          <div className="contacts flex flex-col md:flex-row gap-10">
            {/* Address */}
            <div className="address w-full md:w-1/3 flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="icon w-1/5 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                  <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
                </svg>
              </div>
              <div className="info w-4/5 pl-4">
                <b className="text-gray-900 dark:text-white">Address</b>
                <p className="text-gray-700 dark:text-gray-300">Jl Bahari Raya, Jakarta Selatan</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="address w-full md:w-1/3 flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="icon w-1/5 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                  <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" />
                </svg>
              </div>
              <div className="info w-4/5 pl-4">
                <b className="text-gray-900 dark:text-white">Phone Number</b>
                <p className="text-gray-700 dark:text-gray-300">081294150023</p>
              </div>
            </div>

            {/* Email */}
            <div className="address w-full md:w-1/3 flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="icon w-1/5 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </div>
              <div className="info w-4/5 pl-4">
                <b className="text-gray-900 dark:text-white">Email</b>
                <p className="text-gray-700 dark:text-gray-300">marcoabel25@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
