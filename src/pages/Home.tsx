import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  AiFillPlayCircle,
  AiFillStar,
  AiOutlineEye,
  AiOutlineCheck,
} from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";
export default function Home() {
  return (
    <>
      <Header />
      <section className="font-poppins w-full overflow-hidden">
        {/* SECTION 1 */}
        <section
          className="
            bg-gradient-to-b
            from-[#8f5bff]
            to-[#6a2de2]
            px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[130px]
            pt-10 md:pt-[40px]
            pb-20 md:pb-[150px]
          ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold text-[#f8f5ff] leading-tight">
                Descubra o Corpo <strong>EM LIBRAS</strong>
              </h1>
              <p
                className="text-xl md:text-2xl text-[#f8f5ff] leading-relaxed text-justify
">
                Oi! Eu sou o Pan, seu novo parceiro de descobertas! Você sabia
                que conhecer o nosso próprio corpo é o primeiro passo para uma
                vida saudável? Estou aqui para te mostrar que entender como
                funcionamos ajuda a gente a se comunicar com muito mais
                precisão, especialmente quando precisamos de ajuda. Vamos nessa?
              </p>
              <Link to="/videos" className="w-fit">
                <button
                  className="
                    flex items-center gap-3
                    px-6 py-3 md:px-10 md:py-5
                    text-lg md:text-[1.2rem]
                    font-extrabold
                    rounded-[30px]
                    bg-[#FFCC00]
                    text-[#7f33ff]
                    transition-all
                    hover:scale-105
                    hover:shadow-2xl
                  ">
                  <AiFillPlayCircle className="w-6 h-6 md:w-7 md:h-7" />
                  Explorar vídeos em Libras
                </button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/pan-say-hi.png"
                alt="Mascote em Libras"
                className="w-full max-w-[500px] md:max-w-[900px] drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
        {/* SECTION 2 MODIFICADA */}
        <section
          className="
            relative
            bg-gradient-to-b
            from-[#6a2de2]
            to-[#e7b7ff]
            px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[130px]
            pb-40 md:pb-[320px]
            overflow-hidden
          ">
          <div className="relative z-20">
            {/* Container pai para os bubbles */}
            <div className="flex flex-col gap-10 md:gap-20">
              {/* Primeira linha: 5.0 Estudo didático e Venha! */}
              <div className="flex justify-center items-center gap-8 md:gap-45">
                <div className="bg-[#7d8cff] px-6 py-4 md:px-14 md:py-8 rounded-[36px] drop-shadow-xl text-center hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl md:text-2xl font-extrabold text-[#0b2a4a]">
                      5.0{" "}
                    </span>
                    <AiFillStar className="text-xl md:text-2xl text-[#FFCC00]" />
                  </div>
                  <p className="mt-1 text-[#0b2a4a]">Estudo didático</p>
                </div>
                <div
                  className="bg-[#7d8cff] px-6 py-4 md:px-14 md:py-8 rounded-[32px] drop-shadow-xl hover:scale-105 transition-transform md:min-h-[120px] flex items-center justify-center
">
                  <p className="text-xl md:text-2xl font-extrabold text-[#0b2a4a] text-center">
                    Venha!
                  </p>
                </div>
              </div>
            </div>
            {/* Segunda linha: 5.0 Conteúdo acessível e 5.0 Aprendizado inclusivo */}
            <div className="flex justify-between items-center px-10 md:px-20 gap-8 md:gap-16">
              <div className="bg-[#7d8cff] px-6 py-4 md:px-14 md:py-8 rounded-[36px] drop-shadow-xl text-center hover:scale-105 transition-transform">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl md:text-2xl font-extrabold text-[#0b2a4a]">
                    5.0{" "}
                  </span>
                  <AiFillStar className="text-xl md:text-2xl text-[#FFCC00]" />
                </div>
                <p className="mt-1 text-[#0b2a4a]">Conteúdo acessível</p>
              </div>
              <div className="bg-[#7d8cff] px-8 py-4 md:px-16 md:py-8 rounded-[36px] drop-shadow-xl text-center hover:scale-105 transition-transform">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl md:text-2xl font-extrabold text-[#0b2a4a]">
                    5.0{" "}
                  </span>
                  <AiFillStar className="text-xl md:text-2xl text-[#FFCC00]" />
                </div>
                <p className="mt-1 text-[#0b2a4a]">Aprendizado inclusivo</p>
              </div>
            </div>
          </div>

          {/* Divisão abaixo com flex */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-20 mt-20 md:mt-40">
            {/* Esquerda: Imagens do mascote + container de texto */}
            <div className="flex-1 relative flex justify-center">
              {/* Wrapper relativo para controlar tudo */}
              <div className="relative w-full max-w-[650px]">
                {/* Imagem 1 */}
                <img
                  src="/images/pan-happy.png"
                  className="
                    absolute
                    top-115 md:top-100
                    left-50 md:-left-80
                    w-[70%] md:w-[100%]
                    z-20
                    drop-shadow-2xl
                  "
                  alt="Pan feliz"
                  loading="lazy"
                />

                {/* Imagem 2 */}
                <img
                  src="/images/pan-thinking.png"
                  className="
                    absolute
                    top-12 md:-top-28
                    right-40 md:-right-50
                    w-[80%] md:w-[100%]
                    z-30
                    drop-shadow-2xl
                  "
                  alt="Pan pensando"
                  loading="lazy"
                />

                {/* Container amarelo */}
                <div
                  className="
                    relative
                    mt-40 md:mt-36
                    bg-[#FFCC00]
                    text-[#7f33ff]
                    rounded-[64px]
                    px-8 py-8 md:px-20 md:py-16
                    z-10
                    drop-shadow-2xl
                  ">
                  <p className="text-lg md:text-xl leading-relaxed text-left font-medium">
                    Saber identificar cada parte do corpo não é só coisa de
                    médico, viu? Para a comunidade surda, esse conhecimento é um
                    superpoder! Imagine estar em uma consulta ou em uma
                    emergência e conseguir explicar exatamente o que está
                    sentindo? Dominar os sinais em Libras traz autonomia e
                    segurança para o seu dia a dia.
                  </p>
                </div>
              </div>
            </div>

            {/* Direita: Container roxo + botão flutuante */}
            <div className="flex-1 relative flex justify-start mt-60">
              {/* Wrapper igual ao da esquerda */}
              <div className="relative w-full max-w-[450px]">
                {/* Container roxo */}
                <div
                  className="
                    relative
                    bg-[#7f33ff]
                    rounded-[64px]
                    px-6 py-10 md:px-10 md:py-16
                    text-center
                    drop-shadow-2xl
                    z-10
                  ">
                  <p className="text-lg md:text-xl font-extrabold text-[#FFCC00]">
                    Preparado para colocar as mãos em ação? <br />
                    Clique para começar!
                  </p>
                </div>

                {/* Botão saindo para fora */}
                <Link to="/jogos">
                  <button
                    className="
                      absolute
                      -bottom-6
                      -right-40
                      z-10
                      flex items-center gap-3
                      px-8 py-4 md:px-12 md:py-5
                      rounded-[36px]
                      bg-[#FFCC00]
                      text-[#7f33ff]
                      font-extrabold
                      text-lg md:text-xl
                      drop-shadow-2xl
                      hover:scale-105
                      transition-all
                    ">
                    <MdSportsEsports className="w-6 h-6 md:w-7 md:h-7" />
                    Aprenda Jogando!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="
    relative
    px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[130px]
    pt-10 md:pt-12
    pb-20 md:pb-[120px]
    bg-gradient-to-b
    from-[#e7b7ff]
    to-[#7f33ff]
  ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* ESQUERDA */}
            <div className="flex-1 relative flex justify-center">
              <div className="relative w-full max-w-[650px]">
                {/* Mascote */}
                <img
                  src="/images/pan-normal.png"
                  className="
            absolute
            -top-28
            left-25
            w-[100%]
            z-20
            drop-shadow-2xl
          "
                  alt="Pan normal"
                  loading="lazy"
                />

                {/* Container amarelo */}
                <div
                  className="
            relative
            mt-32
            bg-[#FFCC00]
            text-[#7f33ff]
            rounded-[64px]
            px-8 py-8 md:px-20 md:py-16
            z-10
            drop-shadow-2xl
          ">
                  <p className="text-lg md:text-xl leading-relaxed font-medium">
                    O aprendizado por aqui é para todo mundo! Além de ajudar nas
                    aulas de biologia, você vai explorar o corpo humano através
                    de vídeos autênticos feitos por alunos como você. É a
                    educação acontecendo na prática: de forma que inclui, acolhe
                    e transforma a nossa realidade. Aprender Libras é abrir
                    portas para um mundo mais conectado!
                  </p>
                </div>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex-1 flex justify-center">
              <img
                src="/images/body.png"
                className="
          w-full
          max-w-[500px] md:max-w-[700px]
          drop-shadow-2xl
        "
                alt="Corpo humano"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-10 md:py-[100px] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[130px] bg-[#7f33ff]">
          <div className="max-w-full md:max-w-[1000px] mx-auto flex justify-between gap-4 sm:gap-6 md:gap-10 flex-wrap text-center">
            <div className="flex-1 min-w-[150px] md:min-w-[200px]">
              <AiOutlineEye className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#f8f5ff]" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#f8f5ff] mt-4">
                Assista
              </h3>
              <p className="text-[#f8f5ff] mt-2 text-lg md:text-xl">
                Vídeos em Libras
              </p>
            </div>
            <div className="flex-1 min-w-[150px] md:min-w-[200px]">
              <FaGamepad className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#f8f5ff]" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#f8f5ff] mt-4">
                Aprenda
              </h3>
              <p className="text-[#f8f5ff] mt-2 text-lg md:text-xl">
                Jogos interativos
              </p>
            </div>
            <div className="flex-1 min-w-[150px] md:min-w-[200px]">
              <AiOutlineCheck className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#f8f5ff]" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#f8f5ff] mt-4">
                Avalie
              </h3>
              <p className="text-[#f8f5ff] mt-2 text-lg md:text-xl">
                Teste seu conhecimento
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
