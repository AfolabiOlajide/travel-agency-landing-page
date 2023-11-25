import { MdKeyboardArrowDown } from "react-icons/md";

// local imports
import { navItem } from "@/lib/helpers";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="bg-lightOrange py-[2rem]">
            <div className="cont flex justify-between items-center">
                <div className="logo">
                    <Image
                        src={Logo}
                        className="w-[10rem]"
                        width={20}
                        alt={`Logo`}
                        unoptimized
                    />
                </div>
                <div className="nav-items font-[400] text-[1.2rem] flex items-center gap-[3rem]">
                    {navItem.map((item) => (
                        <Link href={item.link}>
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
            </div>
        </nav>
    );
};

export default Nav;
