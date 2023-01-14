import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const register = () => {
    fetch('http://localhost:3001/api/v1/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
  };

  return (
    <>
      <Head>
        <title>Register Chat</title>
        <meta charSet="utf-8" />
      </Head>

      <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-500">
        <div className="w-80">
          <div className="text-lg font-bold text-center mb-4">
            Register Chat
          </div>

          <div className="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
              <form method="POST">
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  className="w-full bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <button className="w-full text-sm bg-red-400 hover:bg-red-500 dark:bg-gray-800 dark:hover:bg-gray-900 px-6 py-1 mt-3 rounded text-white shadow" onClick={register}>
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
