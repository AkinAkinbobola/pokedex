"use client";

import {FC, useState} from "react";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {formatWord} from "@/lib/utils";
import {heights, pokemonTypes, weights} from "@/lib/constants";

interface Checkboxes {
    [key: string]: boolean;
}

const Filter: FC = () => {
    const [checkboxes, setCheckboxes] = useState<Checkboxes>(
        pokemonTypes.reduce((acc, type) => ({...acc, [type]: false}), {}),
    );

    const handleCheckboxChange = (type: string) => {
        setCheckboxes((prev) => ({...prev, [type]: !prev[type]}));
    };

    const [heightSelect, setHeightSelect] = useState("");
    const [weightSelect, setWeightSelect] = useState("");

    const handleFilters = () => {
    };
    const resetFilters = () => {

    }

    return (
        <Sheet>
            <SheetTrigger
                className="bg-white border-2 border-darkGray/15 rounded-full flex items-center py-3 px-6 gap-2 font-medium">
                <Image src="/icons/filter.svg" alt="sort-icon" width={16} height={16}/>
                <p className="font-bold">Filters</p>
            </SheetTrigger>
            <SheetContent className="bg-lightGray flex flex-col gap-4 min-h-screen overflow-y-auto p-0">
                <div className={"pt-[20px] px-[18px]"}>
                    <SheetTitle className="font-bold text-[20px]">Filters</SheetTitle>
                </div>

                <Separator className="bg-darkGray/25"/>

                <div className={"py-[20px] px-[18px]"}>
                    <h1 className="text-darkGray/60 font-medium pb-[16px]">Type</h1>
                    <div className="grid grid-cols-2 gap-x-[88px] gap-y-[13px]">
                        {pokemonTypes.map((type) => (
                            <div className="flex gap-1 items-center" key={type}>
                                <Image
                                    src={
                                        checkboxes[type]
                                            ? "/icons/check-box.svg"
                                            : "/icons/empty-checkbox.svg"
                                    }
                                    alt="Checkbox"
                                    width={20}
                                    height={20}
                                    onClick={() => handleCheckboxChange(type)}
                                />
                                <p className="font-medium">{formatWord(type)}</p>
                            </div>
                        ))}
                    </div>

                    <h1 className="text-darkGray/60 font-medium mt-[24.5px] mb-[16px]">
                        Height
                    </h1>
                    <div className="flex gap-4">
                        {heights.map((height) => (
                            <div
                                key={height}
                                className={`${
                                    heightSelect === height ? "bg-blue" : "bg-darkGray/15"
                                } rounded-[8px] p-2.5 cursor-pointer`}
                                onClick={() =>
                                    setHeightSelect((prev) => (prev === height ? "" : height))
                                }
                            >
                                <Image
                                    src={`/icons/${height}`}
                                    alt={height}
                                    width={28}
                                    height={28}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-[59px]">
                        {weights.map((weight) => (
                            <div
                                key={weight}
                                className={`${
                                    weightSelect === weight ? "bg-blue" : "bg-darkGray/15"
                                } rounded-[8px] p-2.5 cursor-pointer`}
                                onClick={() =>
                                    setWeightSelect((prev) => (prev === weight ? "" : weight))
                                }
                            >
                                <Image
                                    src={`/icons/${weight}`}
                                    alt={weight}
                                    width={28}
                                    height={28}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-[50px] items-center justify-between">
                        <button className="text-darkBlue font-bold border-darkBlue border-2 py-3 px-6 rounded-lg"
                                onClick={() => resetFilters()}>
                            Reset filters
                        </button>
                        <button
                            className="text-darkBlue bg-blue font-bold py-3 px-6 rounded-lg"
                            onClick={() => handleFilters()}
                        >
                            Apply filters
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Filter;
