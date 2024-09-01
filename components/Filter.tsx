"use client";

import { FC, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { formatWord } from "@/lib/utils";
import { heights, pokemonTypes, weights } from "@/lib/constants";
import { useRouter } from "next/navigation";

interface Checkboxes {
  [key: string]: boolean;
}

const Filter: FC = () => {
  const router = useRouter();
  const [checkboxes, setCheckboxes] = useState<Checkboxes>(
    pokemonTypes.reduce((acc, type) => ({ ...acc, [type]: false }), {}),
  );

  const handleCheckboxChange = (type: string) => {
    setCheckboxes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const [heightSelect, setHeightSelect] = useState<{
    field: string;
    url: string;
  }>();
  const [weightSelect, setWeightSelect] = useState<{
    field: string;
    url: string;
  }>();

  const handleFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (weightSelect) {
      searchParams.set("weight", weightSelect.field);
      router.push(`?${searchParams.toString()}`);
    }

    if (heightSelect) {
      searchParams.set("height", heightSelect.field);
      router.push(`?${searchParams.toString()}`);
    }
  };
  const resetFilters = () => {
    router.push("/");
  };

  return (
    <Sheet>
      <SheetTrigger className="bg-white border-2 border-darkGray/15 rounded-full flex items-center py-3 px-6 gap-2 font-medium">
        <Image src="/icons/filter.svg" alt="sort-icon" width={16} height={16} />
        <p className="font-bold">Filters</p>
      </SheetTrigger>
      <SheetContent className="bg-lightGray flex flex-col gap-4 min-h-screen overflow-y-auto p-0">
        <div className={"pt-[20px] px-[18px]"}>
          <SheetTitle className="font-bold text-[20px]">Filters</SheetTitle>
        </div>

        <Separator className="bg-darkGray/25" />

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
                key={height.field}
                className={`${
                  heightSelect === height ? "bg-blue" : "bg-darkGray/15"
                } rounded-[8px] p-2.5 cursor-pointer`}
                onClick={() =>
                  setHeightSelect((prev) =>
                    prev === height ? { field: "", url: "" } : height,
                  )
                }
              >
                <Image
                  src={`/icons/${height.url}`}
                  alt={height.url}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-[59px]">
            {weights.map((weight) => (
              <div
                key={weight.field}
                className={`${
                  weightSelect?.url === weight.url
                    ? "bg-blue"
                    : "bg-darkGray/15"
                } rounded-[8px] p-2.5 cursor-pointer`}
                onClick={() =>
                  setWeightSelect((prev) =>
                    prev === weight ? { field: "", url: "" } : weight,
                  )
                }
              >
                <Image
                  src={`/icons/${weight.url}`}
                  alt={weight.url}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-[50px] items-center justify-between">
            <SheetClose>
              <button
                className="text-darkBlue font-bold border-darkBlue border-2 py-3 px-6 rounded-lg"
                onClick={() => resetFilters()}
              >
                Reset filters
              </button>
            </SheetClose>
            <SheetClose asChild>
              <button
                className="text-darkBlue bg-blue font-bold py-3 px-6 rounded-lg"
                onClick={() => handleFilters()}
              >
                Apply filters
              </button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
