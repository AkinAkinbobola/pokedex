"use client"

import { FC, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { heights, pokemonTypes, weights } from "@/constants";
import { capitalizeFirstLetter } from "@/lib/utils";

interface Checkboxes {
    [key: string]: boolean;
}

const Filter: FC = () => {
    const [checkboxes, setCheckboxes] = useState<Checkboxes>(
        pokemonTypes.reduce((acc, type) => ({ ...acc, [type]: false }), {})
    );

    const handleCheckboxChange = (type: string) => {
        setCheckboxes((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    const [heightSelect, setHeightSelect] = useState("");
    const [weightSelect, setWeightSelect] = useState("");

    return (
        <Sheet>
            <SheetTrigger className="bg-white border-2 border-darkGray/15 rounded-full flex items-center py-3 px-6 gap-2 font-medium">
                <Image src="/icons/filter.svg" alt="sort-icon" width={16} height={16} />
                <p className="font-bold">Filters</p>
            </SheetTrigger>
            <SheetContent className="bg-lightGray flex flex-col min-h-screen gap-5">
                <SheetTitle className="font-bold text-[20px]">Filters</SheetTitle>
                <Separator className="bg-darkGray/25" />

                <h1 className="text-darkGray/60 font-medium">Type</h1>
                <div className="grid grid-cols-2">
                    {pokemonTypes.map((type) => (
                        <div className="flex gap-1 items-center" key={type}>
                            <Image
                                src={checkboxes[type] ? "/icons/check-box.svg" : "/icons/empty-checkbox.svg"}
                                alt="Checkbox"
                                width={20}
                                height={20}
                                onClick={() => handleCheckboxChange(type)}
                            />
                            <p className="font-medium">{capitalizeFirstLetter(type)}</p>
                        </div>
                    ))}
                </div>

                <h1 className="text-darkGray/60 font-medium">Height</h1>
                <div className="flex gap-4">
                    {heights.map((height: string) => (
                        <div
                            key={height}
                            className={`${
                                heightSelect === height ? "bg-blue" : "bg-darkGray/15"
                            } rounded-[8px] p-2.5 cursor-pointer`}
                            onClick={() => setHeightSelect((prev) => (prev === height ? "" : height))}
                        >
                            <Image src={`/icons/${height}`} alt={height} width={28} height={28} />
                        </div>
                    ))}
                </div>

                <h1 className="text-darkGray/60 font-medium">Weight</h1>
                <div className="flex gap-4">
                    {weights.map((weight: string) => (
                        <div
                            key={weight}
                            className={`${
                                weightSelect === weight ? "bg-blue" : "bg-darkGray/15"
                            } rounded-[8px] p-2.5 cursor-pointer`}
                            onClick={() => setWeightSelect((prev) => (prev === weight ? "" : weight))}
                        >
                            <Image src={`/icons/${weight}`} alt={weight} width={28} height={28} />
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    <button className="text-darkBlue font-bold border-darkBlue border-2 py-3 px-6 rounded-lg">
                        Reset filters
                    </button>
                    <button className="text-darkBlue bg-blue font-bold py-3 px-6 rounded-lg">
                        Apply filters
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Filter;
