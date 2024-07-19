'use client';

import { useEffect, useState } from "react";
import MyHeaderLink from "../header/myheaderLink";


function MyHeader() {

    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };
        window.addEventListener('scroll', handleScroll);

    }, []);

    return (
        <nav className="w-screen flex justify-center">
            <div className={`duration-500 ease-in-out transition-[width] px-3 border ${showHeader == true ? 'h-[70px] w-[85%]' : 'h-[40px] w-full'} shadow-sm rounded-b-lg bg-white`}>
                <MyHeaderLink />
            </div>
        </nav >

    );
}
export default MyHeader;