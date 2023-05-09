import { useState } from "react";

export function SearchBar({ setSearchGames }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchGames(search);
    setSearch("");
  };
  return (
    <form
      action='submit'
      className='mx-1'
      style={{ width: "80%" }}
      onSubmit={handleSubmit}
    >
      <input
        type='search'
        placeholder='Search games ...'
        className='form-control rounded-pill'
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}
