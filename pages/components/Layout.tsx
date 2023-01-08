import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
                <main className="main-container">{ children }</main>
            <Footer />
        </>
    )
}