"use client";

import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.query as HTMLInputElement).value.trim();

    if (!query) return;

    router.push(`?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={
        "my-[40px] flex justify-between gap-2 p-2 shadow-sm bg-white rounded-2xl"
      }
    >
      <div className={"relative flex-1"}>
        <Search
          className={"absolute top-1/2 left-2 -translate-y-1/2 text-darkBlue"}
        />
        <input
          placeholder={"Pokemon name, number or type"}
          className={"ps-12 placeholder-darkBlue h-full w-full outline-none"}
          name={"query"}
        />
      </div>
      <Button
        type={"submit"}
        className={
          "bg-yellow text-darkBlue hover:bg-yellow/80 hover:text-darkBlue/80 px-[50px] py-[12px]"
        }
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
