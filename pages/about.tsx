import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        
        <div className="items-center">
            <h1 className="text-2xl mb-4 text-center">About this project:</h1>
            <p className="mb-6 ml-0 mr-auto mt-6 text-center">
                Este projeto está sendo desenvolvido em NextJS, TailwindCSS. Sendo uma migração do projeto: <Link href="https://github.com/joelvitorniino/chatbot-rocketseat">Chat Rocketseat</Link> para o NextJS. Este projeto tem a premissa de fazer um chat normal mais amigável e mais acessível, com diversas funções já inclusas nele como comandos próprios e outras coisas.
            </p>
            <p className="mb-6 ml-0 mr-auto mt-6 text-center"> 
                Repositório do projeto: <Link href="https://github.com/joelvitorniino/chatbot-rocketseat-nextjs" className="hover:to-blue-500">Clique.</Link>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        </>
    )
}