import { GameItem } from "./GameItem";

export function GamesList({ games }) {
  return (
    <div className='m-2' style={{ width: "80%" }}>
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
        {games.map((game) => {
          return <GameItem key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}
