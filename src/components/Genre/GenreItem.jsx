import { useState } from "react";

export function GenreItem({ genre }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <li
      className={
        isActive === true
          ? "list-group-item list-group-item-hover active"
          : "list-group-item list-group-item-hover "
      }
      style={{
        background: "var(--itemsBackground)",
        color: "var(--itemsColor)",
      }}
      onClick={toggleActive}
    >
      {genre.name}
    </li>
  );
}
