import Image from "next/image";

const Search = ({search}: {search?: string}) => {
    return (
        <section className="w-full bg-white rounded-2xl mt-10 mb-10">
            <form className="flex items-center justify-between py-2 pr-2 pl-4">
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
                        placeholder={"Search..."}
                        className="outline-none text-darkBlue placeholder-darkBlue placeholder:font-medium w-full md:w-[230px]"
                    />
                </div>
                <button className="text-darkBlue bg-yellow py-3 px-6 md:px-12 rounded-lg font-bold">
                    Search
                </button>
            </form>
        </section>

    );
};

export default Search;