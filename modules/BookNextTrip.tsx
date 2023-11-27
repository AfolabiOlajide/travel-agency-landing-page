import Image from "next/image"

// local imports
import Destination from "@/assets/destination.png";
import Payments from "@/assets/payments.png";
import Ride from "@/assets/ride.png";
import Trips from "@/assets/trips.png"
import Header from "./Header"


const BookNextTrip = () => {
    return (
        <section className=" relative">
            <div className="w-full md:w-[80%] lg:w-[65%] px-[1rem] mx-auto my-[9rem] grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-[4rem]">
                {/* text */}
                <div className="text w-full md:w-[70%]">
                    <h5 className="text-slate-600 font-semibold capitalize">Easy and fast</h5>
                    <Header className="font-extrabold text-[2rem] md:text-[3rem] capitalize"><h3>Book Your next trip in 3 easy steps</h3></Header>
                    {/* section */}
                    <section className="mt-[2rem] flex flex-col gap-[2rem]">
                        <div className="section flex gap-[1rem]">
                            <div className="icon">
                                <Image src={Destination} className="w-[3rem]" width={20} alt="Icon" />
                            </div>
                            <div className="body">
                                <h4 className="text-slate-600 font-semibold">Choose Destinations</h4>
                                <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi dolore.</p>
                            </div>
                        </div>
                        <div className="section flex gap-[1rem]">
                            <div className="icon">
                                <Image src={Payments} className="w-[3rem]" width={20} alt="Icon" />
                            </div>
                            <div className="body">
                                <h4 className="text-slate-600 font-semibold">Make Payment</h4>
                                <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi dolore.</p>
                            </div>
                        </div>
                        <div className="section flex gap-[1rem]">
                            <div className="icon">
                                <Image src={Ride} className="w-[3rem]" width={20} alt="Icon" />
                            </div>
                            <div className="body">
                                <h4 className="text-slate-600 font-semibold">Reach Airport on Selected Date</h4>
                                <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi dolore.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* image */}
                <div className="image my-[3rem] mb-[4rem]">
                    <Image src={Trips} className="w-[100%]" width={20} alt="Icon" unoptimized/>
                </div>
            </div>
            {/* design */}
            <div className="design absolute top-[60%] md:top-[20%] right-[25%] -z-10">
                <div className="circle w-[12rem] h-[12rem] rounded-full bg-blue-300"></div>
            </div>
        </section>
    )
}

export default BookNextTrip