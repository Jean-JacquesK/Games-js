import photo from "../../assets/no-image.webp";
import { FaWindows, FaPlaystation, FaXbox, FaAndroid } from "react-icons/fa";

export function GameItem({ game }) {
  return (
    <>
      <div
        className='card m-1'
        style={{
          width: "15em",
          height: " 18em",
          background: "var(--itemsBackground)",
          color: "var(--itemsColor)",
        }}
      >
        <img
          src={game.background_image}
          alt='game name'
          className='card-img-top w-100 h-50'
        />
        <div className='card-body'>
          <div>
            <ul className='list-group list-group-horizontal'>
              <li className='list-group-item'>
                <FaAndroid />
              </li>
              <li className='list-group-item'>
                <FaPlaystation />
              </li>
              <li className='list-group-item'>
                <FaXbox />
              </li>
              <li className='list-group-item'>
                <FaWindows />
              </li>
            </ul>
          </div>
          <h2 className='fs-5'> {game.name} </h2>
        </div>
      </div>
    </>
  );
}
