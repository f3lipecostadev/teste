import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
    px-6 md:px-[130px]
    py-4 md:py-6
    shadow-lg
    font-poppins
    fixed md:relative
    top-0 left-0
    w-full
    z-50
  "
>



  <div className="flex items-center justify-between">
    <Link to="/">
      <img
        src="/images/logo-navbar.png"
        alt="Body Signs Logo"
        className="h-14 md:h-20 rounded-full object-cover"
      />
    </Link>

    <nav className="hidden md:flex space-x-14">
      <Link to="/" className={linkClass("/")}>Home</Link>
      <Link to="/corpo-em-libras" className={linkClass("/corpo-em-libras")}>
        Corpo em Libras
      </Link>
      <Link to="/jogos" className={linkClass("/jogos")}>Jogos</Link>
      <Link to="/contato" className={linkClass("/contato")}>Contato</Link>
    </nav>

    <button
      className="md:hidden text-[#f8f5ff]"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {open && (
    <div className="flex flex-col items-center gap-6 py-6 md:hidden">
      <Link to="/" onClick={() => setOpen(false)} className={linkClass("/")}>
        Home
      </Link>
      <Link
        to="/corpo-em-libras"
        onClick={() => setOpen(false)}
        className={linkClass("/corpo-em-libras")}
      >
        Corpo em Libras
      </Link>
      <Link
        to="/jogos"
        onClick={() => setOpen(false)}
        className={linkClass("/jogos")}
      >
        Jogos
      </Link>
      <Link
        to="/contato"
        onClick={() => setOpen(false)}
        className={linkClass("/contato")}
      >
        Contato
      </Link>
    </div>
  )}
</header>
  );
}
