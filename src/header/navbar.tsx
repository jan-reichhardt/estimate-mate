import React from "react";

interface Navbar {}

const Navbar: React.FC<Navbar> = ()=> {
    return (
        <nav className="navbar mb-5">
            <div>
                <div className={'flex items-center'}>
                    <a className={'font-montserrat text-3xl'} href={'/'}>EstimateMate</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;