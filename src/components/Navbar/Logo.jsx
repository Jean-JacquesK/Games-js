import logo from "../../assets/Logo/logo.webp";

export function Logo() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ width: "4em", height: "4em" }}
    >
      <img src={logo} alt='logo' className='w-100 h-100' />
    </div>
  );
}
