import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Image from "next/image"

// local imports
import Logo from "@/assets/logo.png"
import Link from "next/link"
import PlayStore from "@/assets/playstore.png"


const Footer = () => {
    return (
        <footer className="my-[3rem] mt-[7rem]">
            <div className="cont flex flex-col md:flex-row justify-between gap-[3rem]">
                <div className="logo-part w-full md:w-[20%]">
                    <div className="logo">
                        <Image src={Logo} className="w-[5rem]" width={20} alt="Logo" unoptimized/>
                    </div>
                    <p className="mt-[2rem]">Book your trip in minute, get full Control for much longer.</p>
                </div>
                <div className="links-section grid grid-cols-2 md:grid-cols-3 gap-[2rem] flex-1">
                    <div className="section">
                        <header className="font-bold text-[1.4rem] mb-[1.5rem]">Company</header>
                        <div className="links text-slate-600 flex flex-col gap-[1rem]">
                            <Link href={`#`}>About</Link>
                            <Link href={`#`}>Careers</Link>
                            <Link href={`#`}>Mobile</Link>
                        </div>
                    </div>
                    <div className="section">
                        <header className="font-bold text-[1.4rem] mb-[1.5rem]">Contact</header>
                        <div className="links text-slate-600 flex flex-col gap-[1rem]">
                            <Link href={`#`}>Help/FAQ</Link>
                            <Link href={`#`}>Press</Link>
                            <Link href={`#`}>Affiliates</Link>
                        </div>
                    </div>
                    <div className="section">
                        <header className="font-bold text-[1.4rem] mb-[1.5rem]">More</header>
                        <div className="links text-slate-600 flex flex-col gap-[1rem]">
                            <Link href={`#`}>Airline Fees</Link>
                            <Link href={`#`}>Airline</Link>
                            <Link href={`#`}>Low fare tips</Link>
                        </div>
                    </div>
                </div>
                <div className="socials-download flex flex-col items-center md:items-start">
                    <div className="socials flex items-center gap-[2rem] mb-[2rem]">
                        <div className="social-icon shadow-slate-200 shadow-md p-[1rem] rounded-full">
                            <FaFacebookF />
                        </div>
                        <div className="social-icon shadow-slate-200 shadow-md p-[1rem] rounded-full">
                            <CiInstagram />
                        </div>
                        <div className="social-icon shadow-slate-200 shadow-md p-[1rem] rounded-full">
                            <FaTwitter />
                        </div>
                    </div>
                    <h3 className="text-slate-600 text-[1.4rem] mb-[1rem]">Discover our app</h3>
                    {/* google/app store */}
                    <div className="stores flex items-center gap-[2rem] text-white text-[.5rem]">
                        <div className="google bg-black flex items-center gap-3 p-[.5rem] px-[.7rem] rounded-[3rem] cursor-pointer">
                            <Image src={PlayStore} className="w-[2rem]" width={20} alt="Logo" />
                            <div className="text flex flex-col gap-1">
                                <span className="uppercase font-bold">Get it on</span>
                                <span className="uppercase">Google play</span>
                            </div>
                        </div>
                        <div className="apple bg-black flex items-center gap-3 p-[.5rem] px-[.7rem] rounded-[3rem] cursor-pointer">
                            <FaApple className="text-[2rem]"/>
                            <div className="text flex flex-col gap-1">
                                <span className="font-bold text-[.3rem]">Available on the</span>
                                <span className="font-bold text-[.7rem]">Apple Store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-rights text-center my-[2rem] md:my-[5rem]">
                <span className="text-slate-600 font-semibold text-[.7rem] md:text-base">All rights reserved@jadoo.co</span>
            </div>
        </footer>
    )
}

export default Footer