import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

// local imports
import Header from "./Header";
import UK from "@/assets/uk.png"
import EU from "@/assets/europe.png"
import IT from "@/assets/italy.png"


const Destinations = () => {
    return (
        <section>
            <div className="cont">
                <h5 className="text-center mb-[1rem] text-slate-500 font-bold capitalize">
                    Top Selling
                </h5>
                <Header className="text-[3rem] text-grey font-bold text-center">
                    <h2>Top Destinations</h2>
                </Header>
                {/* destinations */}
                <div className="destinations grid grid-cols-3 gap-[5rem] mt-[4rem]">
                    <div className="destination box-shadow rounded-[2rem] pb-[1rem]">
                        <div className="image">
                            <Image
                                src={IT}
                                className="w-[100%] mx-auto rounded-t-[2rem]"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <div className="state-price p-[1rem] text-slate-600 font-semibold flex justify-between items-center">
                            <span>Rome, Italy</span>
                            <span>$5,42k</span>
                        </div>
                        <div className="days p-[1rem] pt-0 text-slate-600 font-[500] flex items-center gap-[1rem]">
                            <FaLocationArrow />
                            <span className="">10 Days Trip</span>
                        </div>
                    </div>
                    <div className="destination box-shadow rounded-[2rem] pb-[1rem]">
                        <div className="image">
                            <Image
                                src={UK}
                                className="w-[100%] mx-auto rounded-t-[2rem]"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <div className="state-price p-[1rem] text-slate-600 font-semibold flex justify-between items-center">
                            <span>London, Uk</span>
                            <span>$4.2k</span>
                        </div>
                        <div className="days p-[1rem] pt-0 text-slate-600 font-[500] flex items-center gap-[1rem]">
                            <FaLocationArrow />
                            <span className="">12 Days Trip</span>
                        </div>
                    </div>
                    <div className="destination box-shadow rounded-[2rem] pb-[1rem]">
                        <div className="image">
                            <Image
                                src={EU}
                                className="w-[100%] mx-auto rounded-t-[2rem]"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <div className="state-price p-[1rem] text-slate-600 font-semibold flex justify-between items-center">
                            <span>Full Europe</span>
                            <span>$15k</span>
                        </div>
                        <div className="days p-[1rem] pt-0 text-slate-600 font-[500] flex items-center gap-[1rem]">
                            <FaLocationArrow />
                            <span className="">28 Days Trip</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destinations;
