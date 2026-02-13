import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkClass = (path: string): string =>
    `text-xl font-extrabold border-b-4 transition-all duration-200 ${
      location.pathname === path
        ? "text-[#f8f5ff] border-[#D069FF]"
        : "text-[#f8f5ff] border-transparent hover:text-[#FFD6FF] hover:border-[#D069FF]"
    }`;

  return (
    <header
      className="
        bg-gradient-to-b
        from-[#d8ccff]
        to-[#8f5bff]
        flex items-center justify-between
        px-[130px] py-6
        shadow-lg
        font-poppins
      "
    >
      <Link to="/">
        <img
          src="/images/logo-navbar.png"
          alt="Body Signs Logo"
          className="h-20 rounded-full object-cover"
        />
      </Link>

      <nav className="flex space-x-14">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/corpo-em-libras" className={linkClass("/corpo-em-libras")}>
          Corpo em Libras
        </Link>
        <Link to="/jogos" className={linkClass("/jogos")}>Jogos</Link>
        <Link to="/contato" className={linkClass("/contato")}>Contato</Link>
      </nav>
    </header>
  );
}
