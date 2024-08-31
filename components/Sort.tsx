"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {useRouter} from "next/navigation";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [sortValue, setSortValue] = useState<string | undefined>("");
  const router = useRouter();

  const handleSort = (input: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("sort", input);
    router.push(`?${searchParams.toString()}`);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={
          "outline-none py-[12px] px-[16px] cursor-pointer bg-white border-[3px] border-darkGray/[16%] rounded-lg text-darkGray font-bold flex items-center gap-2 w-fit"
        }
        onClick={() => setOpen(true)}
      >
        <span>Lowest Number First</span>
        {open ? (
          <ChevronUp className={"w-[16px] h-[16px] text-darkGray flex-none"} />
        ) : (
          <ChevronDown
            className={"w-[16px] h-[16px] text-darkGray flex-none"}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-fit"}>
        <DropdownMenuRadioGroup value={sortValue} onValueChange={setSortValue}>
          <DropdownMenuRadioItem
            value={"numAsc"}
            onClick={() => handleSort("numAsc")}
          >
            Lowest Number First
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value={"numDesc"}
            onClick={() => handleSort("numDesc")}
          >
            Highest Number First
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value={"alphaAsc"}
            onClick={() => handleSort("alphaAsc")}
          >
            Alphabetically (A-Z)
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value={"alphaDesc"}
            onClick={() => handleSort("alphaDesc")}
          >
            Alphabetically (Z-A)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
