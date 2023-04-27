export function Genre() {
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
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          Action
        </li>
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          Adventure
        </li>
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          RPG
        </li>
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          Shooter
        </li>
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          Simulation
        </li>
        <li
          className='list-group-item list-group-item-hover'
          style={{
            background: "var(--itemsBackground)",
            color: "var(--itemsColor)",
          }}
        >
          Arcade
        </li>
      </ul>
    </div>
  );
}
