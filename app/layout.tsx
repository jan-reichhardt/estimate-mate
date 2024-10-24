import React from "react";
import './global.css';
import Navbar from "../src/header/navbar";

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
            <div className="container-fluid p-8 font-sans bg-primary-bg text-primary">
                <Navbar></Navbar>
                { children }
            </div>
        </body>
        </html>
    )
}