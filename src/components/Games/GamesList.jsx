import { useQuery } from "react-query";
import { GameItem } from "./GameItem";
import { fetchGames, fetchSearchGames } from "../../utils/fetchAPI/Api";
import { Spinner } from "../../utils/ui/Spinner";

export function GamesList({ searchGames }) {
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  const { data: searchedGames } = useQuery({
    queryKey: ["SearchGames", searchGames],
    queryFn: () => fetchSearchGames(searchGames),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>Erreur : {error.toString()} </h3>;
  }

  return (
    <div className='m-2' style={{ width: "85%" }}>
      <h1 className='mx-2'>Games category</h1>
      <div className='mx-2'>
        <select
          name='plateform'
          id='plateform'
          className='form-select'
          style={{ width: "15em" }}
        >
          <option defaultValue=''>--Choose a plateform--</option>
          <option value='Xbox'>Xbox</option>
          <option value='Playstation'>Playstation</option>
          <option value='Android'>Android</option>
          <option value='Microsoft'>Microsoft</option>
        </select>
      </div>
      <div className='m-1 d-flex flex-wrap justify-content-start'>
        {searchedGames?.map((game) => {
          return <GameItem key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}
