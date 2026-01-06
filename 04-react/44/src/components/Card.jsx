import React from "react";
import { Button } from "./Button";

const Card = ({ src, title, desc }) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
            <img
                className="w-full h-48 object-cover"
                src={src}
                alt="Card"
            />

            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

                <p className="mt-2 text-gray-600 text-sm">{desc}</p>

                <Button value={"Go to product"} onClick={() => { location.assign('https://google.com') }} />
            </div>
        </div>
    );
};

export default Card;
