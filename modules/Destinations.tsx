import React from "react";
import Header from "./Header";

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
            </div>
        </section>
    );
};

export default Destinations;
