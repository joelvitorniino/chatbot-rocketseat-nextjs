import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register Chat</title>
        <meta charSet="utf-8" />
      </Head>

      <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <div className="w-80">
          <div className="text-lg font-bold text-center mb-4">
            Register Chat
          </div>

          <div className="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
              <form action="" method="POST">
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 plcaeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />

                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 plcaeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-800 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 plcaeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                  />
                </div>

                <div>
                  <button className="w-full text-sm bg-red-400 hover:bg-red-500 px-6 py-1 mt-3 rounded text-white shadow">
                    <Link href="#">Register</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
