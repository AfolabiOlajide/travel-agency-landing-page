import React from "react";
import Image from "next/image";

// local imports
import Header from "./Header";
import Satelite from "@/assets/satelite.png";
import Plane from "@/assets/plane.png";
import Mic from "@/assets/mic.png";
import Settings from "@/assets/settings.png";

const Category = () => {
    return (
        <section className="py-[8rem]">
            <div className="cont">
                <h5 className="text-center mb-[1rem] text-slate-500 font-bold uppercase">
                    Category
                </h5>
                <Header className="text-[3rem] text-grey font-bold text-center">
                    <h2>We Offer Best Services</h2>
                </Header>
                {/* services */}
                <div className="services grid grid-cols-4 mt-[5rem] gap-[3rem]">
                    {/* service */}
                    <div className="services text-center flex flex-col justify-center">
                        <div className="image">
                            <Image
                                src={Satelite}
                                className="w-[60%] mx-auto"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <h4 className="text-grey font-bold text-[1.3rem] my-[1rem]">
                            Calculated Weather
                        </h4>
                        <p className="w-[60%] mx-auto text-slate-600">
                            Built wicket longer admire do barton vanity itself
                            do in it
                        </p>
                    </div>
                    {/* service */}
                    <div className="services relative">
                        <div className="content text-center flex flex-col justify-center shadow-md shadow-black/5 py-[2rem] bg-white rounded-[3rem]">
                            <div className="image">
                                <Image
                                    src={Plane}
                                    className="w-[60%] mx-auto"
                                    width={20}
                                    alt={`Logo`}
                                    unoptimized
                                />
                            </div>
                            <h4 className="text-grey font-bold text-[1.3rem] my-[1rem]">
                                Calculated Weather
                            </h4>
                            <p className="w-[60%] mx-auto text-slate-600">
                                Built wicket longer admire do barton vanity
                                itself do in it
                            </p>
                        </div>
                        <div className="absolute -bottom-[2rem] -left-[2rem] -z-10 rounded-tl-[2rem] rounded-br-[.7rem] design w-[6rem] h-[6rem] bg-myGreen"></div>
                    </div>
                    {/* service */}
                    <div className="services text-center flex flex-col justify-center">
                        <div className="image">
                            <Image
                                src={Mic}
                                className="w-[60%] mx-auto"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <h4 className="text-grey font-bold text-[1.3rem] my-[1rem]">
                            Calculated Weather
                        </h4>
                        <p className="w-[60%] mx-auto text-slate-600">
                            Built wicket longer admire do barton vanity itself
                            do in it
                        </p>
                    </div>
                    {/* service */}
                    <div className="services text-center flex flex-col justify-center">
                        <div className="image">
                            <Image
                                src={Settings}
                                className="w-[60%] mx-auto"
                                width={20}
                                alt={`Logo`}
                                unoptimized
                            />
                        </div>
                        <h4 className="text-grey font-bold text-[1.3rem] my-[1rem]">
                            Calculated Weather
                        </h4>
                        <p className="w-[60%] mx-auto text-slate-600">
                            Built wicket longer admire do barton vanity itself
                            do in it
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
