import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-gray-500 border-t-1 border-solid border-blackLight text-white">
            <p>
                <Link href="https://github.com/joelvitorniino"><span className="font-bold hover:text-gray-300">Joel Vitor</span> &copy; 2023</Link>
            </p>
        </footer>
    )
}