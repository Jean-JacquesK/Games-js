import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Genre } from "./components/Genre/Genre";
import { GamesList } from "./components/Games/GamesList";
import { fetchGames } from "./utils/fetchAPI/Api";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className='app'
      data-theme={dark ? "darkTheme" : ""}
      style={{ color: "var(--color)", background: "var(--background)" }}
    >
      <Navbar dark={dark} setDark={setDark} />
      <div className='d-flex justify-content-around flex-wrap'>
        <Genre />
        <GamesList />
      </div>
    </div>
  );
}

export default App;
