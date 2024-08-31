import SearchBar from "@/components/SearchBar";
import Pokemons from "@/components/Pokemons";
import Sort from "@/components/Sort";

interface Props {
  searchParams: {
    q: string | undefined;
  };
}

const Home = async ({ searchParams: { q } }: Props) => {
  return (
    <main>
      <SearchBar />

      <div>
        <Sort />
      </div>

      <Pokemons query={q} />
    </main>
  );
};

export default Home;
