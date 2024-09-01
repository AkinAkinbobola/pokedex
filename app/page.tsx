import SearchBar from "@/components/SearchBar";
import Pokemons from "@/components/Pokemons";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";

interface Props {
  searchParams: {
    q: string | undefined;
    sort: string | undefined;
    weight: string | undefined;
    height: string | undefined;
  };
}

const Home = async ({ searchParams: { q, sort, weight, height } }: Props) => {
  return (
    <main>
      <SearchBar />

      <div className={"flex items-center justify-between gap-6"}>
        <Sort />

        <Filter />
      </div>

      <Pokemons query={q} sort={sort} weight={weight} height={height} />
    </main>
  );
};

export default Home;
