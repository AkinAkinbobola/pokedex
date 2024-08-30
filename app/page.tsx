import SearchBar from "@/components/SearchBar";
import Pokemons from "@/components/Pokemons";

interface Props {
  searchParams: {
    q: string | undefined;
  };
}

const Home = async ({ searchParams: { q } }: Props) => {
  return (
    <main>
      <SearchBar />

      <Pokemons query={q} />
    </main>
  );
};

export default Home;
