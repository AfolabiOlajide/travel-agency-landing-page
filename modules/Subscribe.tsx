import Button from "@/components/Button";
import { IoMailOutline } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";


const Subscribe = () => {
    return (
        <section>
            <div className="cont">
                <div className="content relative bg-whitishPurple rounded-[2rem] rounded-tl-[5rem] p-[5rem] flex flex-col items-center">
                    <h4 className="text-[2rem] font-semibold text-center w-full md:w-[80%] mx-auto text-slate-600">Subscribe to get information, latest news nad intresting offers about jadoo</h4>
                    <div className="cta mt-[5rem] flex items-center gap-[1rem]">
                        <div className="input bg-white flex gap-[1rem] p-[1rem] items-center rounded-md w-[30rem]">
                            <IoMailOutline className="text-slate-600 text-[1.3rem]"/>
                            <input type="text" className="bg-transparent outline-none border-none w-[100%]" placeholder="Your mail"/>
                        </div>
                        <Button text="Subscribe" variant/>
                    </div>
                    <div className="absolute -top-[1rem] -right-[1rem] bg-gradient-to-tr from-[#6248e4] to-[#7379ee] p-[1rem] rounded-full">
                        <PiPaperPlaneTiltFill className="text-white text-[2rem]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe