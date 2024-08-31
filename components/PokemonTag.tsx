import {Type} from "@/lib/types";
import {formatWord, getBackgroundTagColour} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface PokemonTagProps {
    type: Type;
}

const PokemonTag = ({ type }: PokemonTagProps) => {
    const backgroundColor = getBackgroundTagColour(type);
    return (
        <Button
            style={{ backgroundColor }}
            className={"rounded-3xl flex items-center gap-1.5"}
        >
            <Image
                src={`/icons/${type.type.name}.svg`}
                alt={`${type.type.name} Icon`}
                width={16}
                height={16}
                className={"flex-none"}
            />
            <span className={"text-darkGray text-[16px] font-medium"}>
        {formatWord(type.type.name)}
      </span>
        </Button>
    );
};

export default PokemonTag;