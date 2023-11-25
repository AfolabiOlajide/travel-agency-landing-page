import Image from "next/image";
import Title from "./Title";
import { FaPlay } from "react-icons/fa";


// local imports
import HeroImg from "@/assets/hero-image.png";
import Button from "@/components/Button";

const Hero = () => {
    return (
        <section className="hero-section bg-lightOrange">
            <div className="cont py-[5rem] grid grid-cols-[43%_60%]">
                <div className="text">
                    <h5 className="uppercase font-bold text-myGreen mb-[2rem] text-[1rem]">
                        best destinations around the world
                    </h5>
                    <Title className="!font-[900] text-[5rem] text-grey leading-[5rem]">
                        <h1>Travel, enjoy and live a new and full life</h1>
                    </Title>
                    <p className="mt-[3rem] text-slate-500 text-base md:text-[1.5rem] leading-[2rem]">
                        Built Wicket longer admire do barton vanity itself do in 
                        it. Preferred to sportsmen it engrosed listening. Park 
                        gate sell they west hard for the.
                    </p>
                    {/* cta */}
                    <div className="cta mt-[3rem] flex gap-[5rem] ">
                        <div className="button text-[1.4rem]">
                            <Button text="Find out more" />
                        </div>
                        <div className="play flex items-center gap-[1.5rem]">
                            <div className="play-btn rounded-full p-[1.4rem] shadow-gr bg-myGreen w-max"><FaPlay /></div>
                            <span className="font-semibold text-slate-500">Play Demo</span>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image
                        src={HeroImg}
                        className="w-[100%]"
                        width={20}
                        alt={`Logo`}
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
