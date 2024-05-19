import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-5 md:flex-row">
        <div className="w-full md:w-2/3 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-700">Algerie Telecome</span>
          </div>

          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-700">
              Forgot Password
            </h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 outline-none text-sm flex-1"
              />
            </div>

            <button
              className="border-2 border-blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white"
            >
              Reset Password
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-blue-400 text-white rounded-tr-xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Welcome Again</h2>
          <div className="border-2 w-10 inline-block border-white mb-2"></div>
          <p className="mb-2">Already a member? Sign in</p>

          <a href="/"
             className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700">
              Sign In
          
          </a>
        </div>
      </div>
    </div>
  );
}
