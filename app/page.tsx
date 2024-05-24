import {fetchPokemon} from "@/app/actions/getPokemon";
import Search from "@/components/Search";

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