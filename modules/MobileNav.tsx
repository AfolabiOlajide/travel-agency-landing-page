'use client'
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

// 
import { navItem } from "@/lib/helpers";
import Link from "next/link"



export default function MobileNav ({ handleToggleState, isToggled }: { handleToggleState: () => void, isToggled: boolean}){
    const [mounted, setMounted] = useState<boolean>(false);
    
    let portal;
    if (typeof document !== 'undefined') {
        portal = document.querySelector("#navPortal");
    }

    useEffect(() => setMounted(true), []);

    return mounted ?  ReactDOM.createPortal(
        <nav className={`bg-main dark:bg-mainDark text-white mobile-menu z-50 block md:hidden fixed top-0 ${isToggled ? "right-0" : "right-[120%]"} w-[100%] bottom-0 pl-[3rem] pt-[10rem] trans`}>
            <div className="close w-max p-[.2rem] rounded-[50%] absolute top-[5%] right-[10%] cursor flex items-center justify-center" onClick={handleToggleState}>
                <div className="ineer p-[.3rem]">
                    <AiOutlineClose className="text-[2rem]"/>
                </div>
            </div>
            <div className="nav-links">
                <ul className="flex flex-col gap-[3rem] ">
                    {
                        navItem.map(navItem => (
                            <li className="text-[1.3rem] uppercase" key={navItem.name}>
                                <Link href={`${navItem.link}`} onClick={handleToggleState}>{navItem.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>,
        portal as HTMLElement
    ) : null;
}