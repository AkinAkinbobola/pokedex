import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PokemonData } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import {
  formatWord,
  formatPokemonId,
  getBackgroundPokemonColour,
} from "@/lib/utils";
import Image from "next/image";
import React from "react";
import PokemonTag from "@/components/PokemonTag";
import PokemonAbout from "@/components/PokemonAbout";
import PokemonStats from "@/components/PokemonStats";
import PokemonEvolution from "@/components/PokemonEvolution";

interface ShowPokemonDetailsDialogProps {
  open: boolean;
  openChange: (open: boolean) => void;
  pokemon: PokemonData;
}

const ShowPokemonDetailsDialog = ({
  openChange,
  open,
  pokemon,
}: ShowPokemonDetailsDialogProps) => {
  const backgroundColor = getBackgroundPokemonColour(pokemon);
  return (
    <Dialog onOpenChange={openChange} open={open}>
      <DialogContent
        className={"w-[725px] h-[698px] p-0 fixed border-none flex flex-col"}
        style={{ backgroundColor }}
      >
        <ArrowLeft
          className={"absolute top-4 left-4 text-white cursor-pointer"}
          onClick={() => openChange(false)}
        />

        <div className={"flex items-center justify-center gap-[10px] h-[40%]"}>
          <Image
            src={
              pokemon.sprites.other?.["official-artwork"].front_default ||
              "/icons/large-height.svg"
            }
            alt={`${pokemon.name} Sprite`}
            width={180}
            height={180.9}
          />

          <div className={"flex flex-col"}>
            <h2 className={"text-white/80 font-bold text-[18px] mb-2"}>
              {formatPokemonId(pokemon.id)}
            </h2>
            <h1
              className={
                "font-bold text-white text-[48px] mb-[18px] cursor-pointer"
              }
            >
              {formatWord(pokemon.name)}
            </h1>

            <div className={"flex items-center gap-2"}>
              {pokemon.types.map((item) => (
                <PokemonTag type={item} key={item.type.name} />
              ))}
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="about"
          className="w-full bg-white rounded-t-3xl h-[60%]"
        >
          <TabsList className={"w-full bg-white"}>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="stats">Base Stats</TabsTrigger>
            <TabsTrigger value="evolution">Evolution</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <PokemonAbout pokemon={pokemon} />
          </TabsContent>
          <TabsContent value="stats">
            <PokemonStats pokemon={pokemon} />
          </TabsContent>
          <TabsContent value="evolution" className={"h-full"}>
            <PokemonEvolution pokemonId={pokemon.id} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ShowPokemonDetailsDialog;
