import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Genre } from "./components/Genre/Genre";
import { GamesList } from "./components/Games/GamesList";

function App() {
  const [dark, setDark] = useState(false);
  const [searchGames, setSearchGames] = useState("");

  return (
    <div
      className='app'
      data-theme={dark ? "darkTheme" : ""}
      style={{ color: "var(--color)", background: "var(--background)" }}
    >
      <Navbar dark={dark} setDark={setDark} setSearchGames={setSearchGames} />
      <div className='d-flex justify-content-around flex-wrap'>
        <Genre />
        <GamesList searchGames={searchGames} />
      </div>
    </div>
  );
}

export default App;
