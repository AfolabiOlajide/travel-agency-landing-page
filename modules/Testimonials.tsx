'use client'
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


// local imports
import Man from "@/assets/man.jpg"
import Header from "./Header"


const Testimonials = () => {
    const [position, setPosition] = useState({
        top: "top-0 left-[5%] md:left-[20%]",
        bottom: "top-[4rem] md:top-[40%] left-[4rem] md:left-[30%] -z-10"
    })

    const handleUpSwap = () =>{
        setPosition(_ => {
            return { bottom: position.top, top: position.bottom }
        })
    }

    const handleDownSwap = () =>{
        setPosition(_ => {
            return { top: position.bottom, bottom: position.top }
        })
    }

    return (
        <section className="my-[9rem]">
            <div className="cont grid grid-cols-1 md:grid-cols-[40%_60%]">
                {/* text */}
                <div className="text w-full md:w-[80%]">
                    <h5 className="text-slate-600 font-semibold uppercase">testimonials</h5>
                    <Header className="font-extrabold text-[2rem] md:text-[3rem] capitalize"><h3>What people say about us</h3></Header>

                    {/* dot dot */}
                    <div className="dots flex items-center gap-[1rem] md:gap-[2rem] mt-[1.5rem] md:mt-[3rem]">
                        <div className="dot w-[.5rem] md:w-[1rem] h-[.5rem] md:h-[1rem] rounded-full bg-grey"></div>
                        <div className="dot w-[.5rem] md:w-[1rem] h-[.5rem] md:h-[1rem] rounded-full bg-slate-300"></div>
                        <div className="dot w-[.5rem] md:w-[1rem] h-[.5rem] md:h-[1rem] rounded-full bg-slate-300"></div>
                    </div>
                </div>

                {/* textimonials */}
                <div className="testimonials relative mt-[6rem] md:mt-0">
                    <div className={`testimony absolute ${position.top} w-[20rem] md:w-[30rem] trans text-slate-600`}>
                        <div className="image absolute -top-[1rem] -left-[1rem] md:-top-[3rem] md:-left-[2rem]">
                            <Image src={Man} className="w-[3rem] md:w-[5rem] rounded-full" width={20} alt="testifier" unoptimized/>
                        </div>
                        <div className="testifier-box rounded-md bg-white shadow-slate-200 shadow-md p-[2rem]">
                            <p className="text-[.7rem] md:text-base">"On the windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                            <h6 className="name mt-[3rem] font-semibold">Mike Taylor</h6>
                            <h6 className="location">Lahore, Pakistan</h6>
                        </div>
                    </div>
                    <div className={`testimony absolute ${position.bottom} w-[20rem] md:w-[30rem] trans text-slate-600`}>
                        <div className="image absolute -top-[1rem] -left-[1rem] md:-top-[3rem] md:-left-[2rem]">
                            <Image src={Man} className="w-[3rem] md:w-[5rem] rounded-full" width={20} alt="testifier" unoptimized/>
                        </div>
                        <div className="testifier-box rounded-md bg-white shadow-slate-200 shadow-md p-[2rem]">
                            <p className="text-[.7rem] md:text-base">"On the windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                            <h6 className="name mt-[3rem] font-semibold">Chris Thomas</h6>
                            <h6 className="location">CEO of Red Button</h6>
                        </div>
                    </div>

                    {/* controls */}
                    <div className="absolute -top-[3rem] md:top-[30%] -right-[5%] md:-right-[10%] flex gap-[2rem] flex-col justify-center">
                        <MdKeyboardArrowUp className="text-[2rem] cursor-pointer" onClick={handleUpSwap}/>
                        <MdKeyboardArrowDown className="text-[2rem] cursor-pointer" onClick={handleDownSwap}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials