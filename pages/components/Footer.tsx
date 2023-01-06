import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-blackOpaque border-t-1 border-solid border-blackLight text-white">
            <p>
                <Link href="https://github.com/joelvitorniino"><span className="font-bold">Joel Vitor</span> &copy; 2023</Link>
            </p>
        </footer>
    )
}