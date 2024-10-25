import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <div className="w-full h-48 bg-[--gray-700] flex flex-col justify-center items-center">
      <img className="w-32" src={Logo} />
    </div>
  );
}
