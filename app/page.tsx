import SearchBar from "@/components/SearchBar";
import Pokemons from "@/components/Pokemons";
import Sort from "@/components/Sort";

interface Props {
  searchParams: {
    q: string | undefined;
    sort: string | undefined;
  };
}

const Home = async ({ searchParams: { q, sort } }: Props) => {
  return (
    <main>
      <SearchBar />

      <div>
        <Sort />
      </div>

      <Pokemons query={q} sort={sort} />
    </main>
  );
};

export default Home;
