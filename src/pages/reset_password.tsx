import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "../lib/axios";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const resetPassword = (e: any) => {
    api
      .post("/resetPassword", {
        email,
        token,
        password,
      })
      .then(() => {
        return;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta charSet="utf-8" />
      </Head>

      <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-500">
        <div className="w-80">
          <div className="text-lg font-bold text-center mb-4">
            Reset Password
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

              <label
                htmlFor="token"
                className="block text-sm text-gray-800 mb-2"
              >
                Token
              </label>
              <input
                type="text"
                name="token"
                className="w-full bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                value={token}
                required
                onChange={(e) => setToken(e.target.value)}
              />

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="w-full text-sm bg-red-400 hover:bg-red-500 dark:bg-gray-800 dark:hover:bg-gray-900 px-6 py-1 mt-3 rounded text-white shadow"
                  onClick={resetPassword}
                >
                  <Link href="/">Reset Password</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
