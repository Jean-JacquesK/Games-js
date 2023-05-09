import { DarkModeSwitch } from "react-toggle-dark-mode";

export function SwitchMode({ dark, setDark }) {
  function toggleDarkMode() {
    setDark(!dark);
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <DarkModeSwitch onChange={toggleDarkMode} checked={dark} />
    </div>
  );
}
