import Head from "next/head";

export default function About() {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>

        <div className="items-center">
            <h1 className="text-2xl mb-4 text-center">About this project:</h1>
            <p className="mb-6 ml-0 mr-auto mt-6 text-center">Lorem ipsum dolor</p>
        </div>
        </>
    )
}