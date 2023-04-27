export function SearchBar() {
  return (
    <form action='submit' className='mx-1' style={{ width: "80%" }}>
      <input
        type='search'
        placeholder='Search games ...'
        className='form-control rounded-pill'
      />
    </form>
  );
}
