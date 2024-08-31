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

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [sortValue, setSortValue] = useState<string | undefined>("");

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
          <DropdownMenuRadioItem value={"numAsc"}>
            Lowest Number First
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value={"numDesc"}>
            Highest Number First
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value={"alphaAsc"}>
            Alphabetically (A-Z)
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value={"alphaDesc"}>
            Alphabetically (Z-A)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
