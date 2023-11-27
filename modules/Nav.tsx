'use client'
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

// local imports
import { navItem } from "@/lib/helpers";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const handleNavToggle = () => {
        setIsNavOpen(prev => !prev)
    }

    return (
        <>
            <nav className="bg-lightOrange py-[2rem]">
                <div className="cont flex justify-between items-center">
                    <div className="logo">
                        <Image
                            src={Logo}
                            className="w-[5rem] md:w-[10rem]"
                            width={20}
                            alt={`Logo`}
                            unoptimized
                        />
                    </div>
                    <div className="hidden nav-items font-[400] text-[1.2rem] md:flex items-center gap-[3rem]">
                        {navItem.map((item) => (
                            <Link href={item.link} key={item.id}>
                                <span className="capitalize">{item.name}</span>
                            </Link>
                        ))}
                        {/* login */}
                        <Link href={``}>
                            <span className="capitalize ml-[3rem]">Login</span>
                        </Link>
                        {/* signup */}
                        <Link href={``} className="border border-black p-[.4rem] px-[1rem] rounded-md">
                            <span className="capitalize ">Signup</span>
                        </Link>
                        {/* lang */}
                        <div className="lang flex items-center gap-[2px]">
                            <span>En</span>
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                    <div className="ham block md:hidden" onClick={handleNavToggle}>
                        <HiMenuAlt3 className="text-[2rem]"/>
                    </div>
                </div>
            </nav>
            <MobileNav handleToggleState={handleNavToggle} isToggled={isNavOpen}/>
        </>
    );
};

export default Nav;
