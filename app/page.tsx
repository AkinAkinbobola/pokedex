import {fetchPokemon} from "@/app/actions/getPokemon";
import Search from "@/components/Search";
import Sort from "@/components/Sort";

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
            </div>
            <ul>
                {
                    pokemon.map((p: { name: string, url: string }) => (
                        <li>{p.name} - {p.url}</li>
                    ))
                }
            </ul>
        </main>
    );
};

export default Home;