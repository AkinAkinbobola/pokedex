import {fetchPokemon} from "@/app/actions/getPokemon";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";
import LoadPokemon from "@/components/LoadPokemon";

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
            <Search search={search}/>

            <div className={"flex items-center justify-between mb-10"}>
                <Sort/>

                <Filter/>
            </div>

            <LoadPokemon search={search} initialPokemon={pokemon}/>
        </main>
    );
};

export default Home;