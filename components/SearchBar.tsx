import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className={"relative my-[40px]"}>
      <Search
        className={"absolute top-1/2 left-3 -translate-y-1/2 text-darkBlue"}
      />
      <Input
        placeholder={"Pokemon name, number or type"}
        className={"pl-14 placeholder-darkBlue"}
      />

      <Button
        className={
          "absolute right-0 top-1/2 -translate-y-1/2 bg-yellow text-darkBlue hover:bg-yellow/80 hover:text-darkBlue/80 px-[50px] py-[12px]"
        }
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
