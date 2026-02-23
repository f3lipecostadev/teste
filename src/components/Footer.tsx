import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b
        from-[#6d28d9]
        via-[#7f33ff]
        to-[#a855f7]
        text-white
        font-poppins
        pt-16
        pb-8
        px-8
        md:px-[130px]
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-12">
        
        <div className="flex items-center">
          <img
            src="/images/body-signs.png"
            alt="Body Signs"
            className="w-48 md:w-56 object-contain"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Navegação</h3>
          <ul className="space-y-3 text-base text-[#f8f5ff]">
            <li>
              <a href="/" className="hover:text-[#FFCC00] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/videos" className="hover:text-[#FFCC00] transition-colors">
                Vídeos
              </a>
            </li>
            <li>
              <a href="/jogos" className="hover:text-[#FFCC00] transition-colors">
                Jogos
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-[#FFCC00] transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Contato</h3>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.instagram.com/f3lipe_cosst/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFCC00] transition-all duration-300 hover:scale-110"
            >
              <AiOutlineInstagram />
            </a>

            <a
              href="https://wa.me/5598984075894"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFCC00] transition-all duration-300 hover:scale-110"
            >
              <RiWhatsappLine />
            </a>

            <a
              href="mailto:felipekaua@acad.ifma.edu.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFCC00] transition-all duration-300 hover:scale-110"
            >
              <HiOutlineMail />
            </a>

            <a
              href="https://www.facebook.com/f3lipe_cosst/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFCC00] transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6 text-center text-base text-[#f8f5ff]">
        © 2026 Body Signs. Todos os direitos reservados.
      </div>
    </footer>
  );
}
