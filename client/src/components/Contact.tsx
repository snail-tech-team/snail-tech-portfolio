export default function Contact() {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
          <p
            style={{ fontWeight: 200, letterSpacing: 3 }}
            className="text-blue-700 font-bold uppercase tracking-wider"
          >
            Contact
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life.
        </p>
      </div>

      {/* Contact Information - Now in One Row */}
      <div className="mb-8">
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          {/* Contact Items in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">
                  Address
                </h4>
                <p className="text-gray-600">
                  Jl Bahari Raya,
                  <br />
                  Jakarta Selatan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Phone</h4>
                <a
                  href="https://wa.me/6281294150023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium group-hover:underline transition-all duration-200 flex items-center justify-center gap-2"
                >
                  081294150023
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Click to chat on WhatsApp
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">Email</h4>
                <a
                  href="mailto:marcoabel25@gmail.com"
                  className="text-red-600 hover:text-red-700 font-medium group-hover:underline transition-all duration-200 flex items-center justify-center gap-2"
                >
                  marcoabel25@gmail.com
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-2">Send me an email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
