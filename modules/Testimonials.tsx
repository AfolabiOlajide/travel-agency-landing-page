import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


// local imports
import Man from "@/assets/man.jpg"
import Header from "./Header"


const Testimonials = () => {
    return (
        <section className="my-[9rem]">
            <div className="cont grid grid-cols-[40%_60%]">
                {/* text */}
                <div className="text w-full md:w-[80%]">
                    <h5 className="text-slate-600 font-semibold uppercase">testimonials</h5>
                    <Header className="font-extrabold text-[3rem] capitalize"><h3>What people say about us</h3></Header>

                    {/* dot dot */}
                    <div className="dots flex items-center gap-[2rem] mt-[3rem]">
                        <div className="dot w-[1rem] h-[1rem] rounded-full bg-grey"></div>
                        <div className="dot w-[1rem] h-[1rem] rounded-full bg-slate-300"></div>
                        <div className="dot w-[1rem] h-[1rem] rounded-full bg-slate-300"></div>
                    </div>
                </div>

                {/* textimonials */}
                <div className="testimonials relative">
                    <div className="testimony absolute top-0 left-[20%] w-[30rem] trans text-slate-600">
                        <div className="image absolute -top-[3rem] -left-[2rem]">
                            <Image src={Man} className="w-[5rem] rounded-full" width={20} alt="testifier" unoptimized/>
                        </div>
                        <div className="testifier-box rounded-md bg-white shadow-slate-200 shadow-md p-[2rem]">
                            <p>"On the windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                            <h6 className="name mt-[3rem] font-semibold">Mike Taylor</h6>
                            <h6 className="location">Lahore, Pakistan</h6>
                        </div>
                    </div>
                    <div className="testimony absolute top-[40%] left-[30%] -z-10 w-[30rem] trans text-slate-600">
                        <div className="image absolute -top-[3rem] -left-[2rem]">
                            <Image src={Man} className="w-[5rem] rounded-full" width={20} alt="testifier" unoptimized/>
                        </div>
                        <div className="testifier-box rounded-md bg-white shadow-slate-200 shadow-md p-[2rem]">
                            <p>"On the windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                            <h6 className="name mt-[3rem] font-semibold">Chris Thomas</h6>
                            <h6 className="location">CEO of Red Button</h6>
                        </div>
                    </div>

                    {/* controls */}
                    <div className="absolute top-[30%] -right-[10%] flex gap-[2rem] flex-col justify-center">
                        <MdKeyboardArrowUp className="text-[2rem] cursor-pointer"/>
                        <MdKeyboardArrowDown className="text-[2rem] cursor-pointer"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials