

// local imports
import Axon from "@/assets/axon.png";
import Jetstar from "@/assets/jetstar.png";
import Expedia from "@/assets/expedia.png";
import Qantas from "@/assets/qantas.png";
import Alitalia from "@/assets/amtalia.png"
import Image from "next/image";

const Sponsors = () => {
    return (
        <section className="my-[13rem]">
            <div className="cont">
                <div className="sponsors grid grid-cols-5 gap-[5rem]">
                    <div className="image">
                        <Image src={Axon} className="w-full" width={20} alt="Axon Mobile" unoptimized/>
                    </div>
                    <div className="image">
                        <Image src={Jetstar} className="w-full" width={20} alt="Axon Mobile" unoptimized/>
                    </div>
                    <div className="image bg-white rounded-md box-shadow">
                        <Image src={Expedia} className="w-full" width={20} alt="Axon Mobile" unoptimized/>
                    </div>
                    <div className="image">
                        <Image src={Qantas} className="w-full" width={20} alt="Axon Mobile" unoptimized/>
                    </div>
                    <div className="image">
                        <Image src={Alitalia} className="w-full" width={20} alt="Axon Mobile" unoptimized/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors