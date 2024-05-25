"use client"

import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";

const Search = ({search}: { search?: string }) => {
    const router = useRouter()
    const [text, setText] = useState("")

    const handleSearch = () => {
        if (text) {
            router.push(`?search=${text}`)
        }
    }
    return (
        <section className="w-full bg-white rounded-2xl mt-10 mb-10">
            <div className="flex items-center justify-between py-2 pr-2 pl-4">
                <div className="flex items-center gap-4 flex-grow">
                    <Image
                        src="/icons/search.svg"
                        alt="Search Icon"
                        width={24}
                        height={24}
                        className="text-darkBlue fill-current"
                    />
                    <input
                        type="text"
                        value={text}
                        placeholder={"Search..."}
                        onChange={(e) => setText(e.target.value)}
                        className="outline-none text-darkBlue placeholder-darkBlue placeholder:font-medium w-full"
                    />
                </div>
                <button className="text-darkBlue bg-yellow py-3 px-6 md:px-12 rounded-lg font-bold"
                        onClick={handleSearch}>
                    Search
                </button>
            </div>
        </section>

    );
};

export default Search;