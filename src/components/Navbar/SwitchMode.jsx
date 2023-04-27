import Switch from "react-switch";

export function SwitchMode({ dark, setDark }) {
  function handleChange() {
    setDark(!dark);
  }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Switch onChange={handleChange} checked={dark} />
      <p className='m-0 mx-1'>Switch Color</p>
    </div>
  );
}
