import Image from "next/image";

const Search = () => {
    return (
        <section className={"w-full bg-white rounded-2xl mt-10"}>
            <form className={"flex items-center justify-between py-2 pr-2 pl-4"}>
                <div className={"flex items-center gap-4"}>
                    <Image src={"/icons/search.svg"} alt={"Search Icon"} width={24} height={24}
                           className={"text-darkBlue fill-current"}/>
                    <input type="text" placeholder={"Pokemon name, number or type"}
                           className={"outline-none text-darkBlue placeholder-darkBlue placeholder:font-medium w-[230px]"}/>
                </div>
                <button className={"text-darkBlue bg-yellow py-3 px-12 rounded-lg font-bold"}>
                    Search
                </button>
            </form>
        </section>
    );
};

export default Search;