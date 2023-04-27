import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { SwitchMode } from "./SwitchMode";

export function Navbar({ dark, setDark }) {
  return (
    <div className='d-flex justify-content-around align-items-center my-2'>
      <Logo />
      <SearchBar />
      <SwitchMode dark={dark} setDark={setDark} />
    </div>
  );
}
