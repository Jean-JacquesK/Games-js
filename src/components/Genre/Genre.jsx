import { useQuery } from "react-query";
import { fetchGamesGenres } from "../../utils/fetchAPI/Api";
import { Spinner } from "../../utils/ui/Spinner";

export function Genre() {
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGamesGenres,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>Erreur : {error.toString()} </h3>;
  }
  return (
    <div
      className='mx-2'
      style={{
        width: "9em",
      }}
    >
      <h1 className='fs-4 x-2'>Genres</h1>
      <ul
        className='list-group'
        style={{
          background: "var(--itemsBackground)",
          color: "var(--itemsColor)",
        }}
      >
        {genres.map((genre) => {
          return (
            <li
              key={genre.id}
              className='list-group-item list-group-item-hover'
              style={{
                background: "var(--itemsBackground)",
                color: "var(--itemsColor)",
              }}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
