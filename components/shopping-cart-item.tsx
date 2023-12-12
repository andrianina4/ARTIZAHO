import { Delete, Place, Time } from "@/constants/link/icons";
import Image from "next/image";
import React from "react";

type ShoppingCartProps = {
    isBottom? : boolean
};

function ShoppingCart({isBottom}: ShoppingCartProps) {
    return (
        <article className={`flex gap-x-3 ${isBottom ? 'relative mb-12' : ''}`}>
            <div className="relative w-[130px] h-[110px] object-cover">
                <Image
                    src={"/temp/vase.png"}
                    alt={`shopping-1`}
                    fill
                    className="rounded-3xl"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between">
                        <p className="text-black-default font-bold">Bouquet en vase</p>
                        <p className="flex items-center gap-x-5 text-brown font-bold">
                            <span>15.00 €</span>{" "}
                            <span className="text-xl">
                                <Delete />
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-x-5 text-brown font-bold">
                        <p className="flex items-center gap-x-2">
                            <span className="text-xl">
                                <Time />
                            </span>{" "}
                            Durée 1:30
                        </p>
                        <p className="flex items-center gap-x-2">
                            <span className="text-xl">
                                <Place />
                            </span>{" "}
                            Antananarivo
                        </p>
                    </div>
                </div>

                <div className={`flex justify-between ${isBottom ?  'absolute -bottom-12 left-0' : ''}`}>
                    <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
                        <span className="text-base">
                            <Time />
                        </span>{" "}
                        Vendredi 06 Novembre 2023
                    </p>
                    <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
                        <span className="text-base">
                            <Time />
                        </span>{" "}
                        16h30 - 17h00
                    </p>
                    <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
                        <span className="text-base">
                            <Time />
                        </span>{" "}
                        2 personnes
                    </p>
                    </div>
            </div>
        </article>
    );
}

export default ShoppingCart;
