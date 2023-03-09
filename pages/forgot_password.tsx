import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "../lib/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const forgotPassword = (e: any) => {
    api
      .post("/recoverPassword", {
        email,
      })
      .then(() => {
        return;
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta charSet="utf-8" />
      </Head>

      <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-500">
        <div className="w-80">
          <div className="text-lg font-bold text-center mb-4">
            Forgot Password
          </div>

          <div className="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <button
                  className="w-full text-sm bg-red-400 hover:bg-red-500 dark:bg-gray-800 dark:hover:bg-gray-900 px-6 py-1 mt-3 rounded text-white shadow"
                  onClick={forgotPassword}
                >
                  <Link href="/reset_password">Recover Password</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
