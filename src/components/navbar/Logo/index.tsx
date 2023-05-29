import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <div className="text-textColor flex items-center text-4xl tracking-normal sm:tracking-widest font-bold transition hover:opacity-70">enes dmc</div>
        </Link>
    );
};

export default Logo;
