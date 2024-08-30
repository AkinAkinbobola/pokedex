import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PokemonsLoadingSkeleton = () => {
  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-[82px] mt-[102px]"
      }
    >
      {new Array(10).fill(null).map((_, index) => (
        <PokemonLoadingSkeleton key={index}/>
      ))}
    </div>
  );
};

export default PokemonsLoadingSkeleton;

const PokemonLoadingSkeleton = () => {
  return (
    <Skeleton className={"rounded-xl relative h-[260px] bg-[#D3D4D8]"}>
      <Skeleton
        className={
          "bg-[#AAAAAA] absolute top-24 -translate-y-full left-1/2 -translate-x-1/2 w-[180px] h-[133.8px]"
        }
      />

      <div className={"p-6 absolute bottom-0"}>
        <Skeleton
          className={
            "bg-[#AAAAAA] w-[102px] h-[32.95px] rounded-3xl mb-[9.99px]"
          }
        />

        <Skeleton
          className={"bg-[#AAAAAA] w-[42px] h-[18px] rounded-3xl mb-[20.9px]"}
        />

        <div className={"flex items-center gap-2"}>
          <Skeleton
            className={"bg-[#AAAAAA] w-[86px] h-[34.95px] rounded-3xl"}
          />
          <Skeleton
            className={"bg-[#AAAAAA] w-[86px] h-[34.95px] rounded-3xl"}
          />
        </div>
      </div>
    </Skeleton>
  );
};
