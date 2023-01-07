import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-4 pr-5 mb-8 bg-blackOpaque text-white">
            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <Link href="/" className="pl-1">Chat Rocketseat</Link>
            </div>

            <ul className="flex list-none">
                <li className="">
                    <Link href="/" className="text-white no-underline p-5p delay-smooth border-b-2 border-solid border-transparent hover:border-white">Login</Link>
                </li>

                <li>
                    <Link href="register" className="text-white no-underline p-5p delay-smooth border-b-2 border-solid border-transparent hover:border-white">Register</Link>
                </li>
                
                <li>
                    <Link href="about" className="text-white no-underline p-5p delay-smooth border-b-2 border-solid border-transparent hover:border-white">About</Link>
                </li>
            </ul>
        </nav>
    )
}