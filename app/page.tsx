import {fetchPokemon} from "@/app/actions/getPokemon";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";

type HomeProps = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Home = async ({searchParams}: HomeProps) => {
    const search = typeof searchParams.search === "string" ? searchParams.search : undefined;
    const pokemon = await fetchPokemon({search})
    return (
        <main>
            <Search/>

            <div className={"flex items-center justify-between mb-10"}>
                <Sort/>

                <Filter/>
            </div>
        </main>
    );
};

export default Home;