import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta charSet="utf-8" />
      </Head>

      <div className="m-0 p-0 box-border antialiased">
        <div className="bg-white max-w-lg m-16 flex flex-col rounded shadow-[0_2px_25px_rgba(0, 0, 0, 0.2)]">
        <form>
          <h1 className="pt-9 pr-9 pb-0 pl-9 font-light">Login</h1>
          <div className="pt-9 text-center">
            <div className="pt-3 pr-1">
              <input
                className="text-base block font-['Rubik'] w-full pt-3 pr-1 border-0 border-b-2 border-solid border-b-neutral-400 outline-none transition-all uppercase focus:border-b-black"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="text-base block font-['Rubik'] w-full pt-3 pr-1 border-0 border-b-2 border-solid border-b-neutral-400 outline-none transition-all uppercase focus:border-b-black"
                type="password"
                placeholder="Password"
                name="password"
              />

              <Link href="/auth/google" className="text-stone-400 tracking-tight uppercase block mt-5">Login with Google</Link>
              <Link href="/forgot" className="text-stone-400 tracking-tighter uppercase inline-block mt-5">Forgot Your Password</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}