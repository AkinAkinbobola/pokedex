"use client"

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {sorts} from "@/constants";
import {useState} from "react";
import Image from "next/image";

const Sort = () => {
    const [sortsDropdown, setSortsDropdown] = useState(sorts[0])

    return (
        <div className={"bg-white border-2 border-darkGray/15 rounded-[8px]"}>
            <DropdownMenu>
                <DropdownMenuTrigger className={"flex items-center justify-between py-3 px-4 gap-2"}>
                    <p className={"font-bold"}>
                        {sortsDropdown}
                    </p>
                    <Image src={"/icons/arrow.svg"} alt={"sort-icon"} width={16} height={16}/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {
                        sorts.map((sortItem: string) => (
                            <DropdownMenuItem key={sortItem} onClick={() => setSortsDropdown(sortItem)}>
                                {sortItem}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
};

export default Sort;