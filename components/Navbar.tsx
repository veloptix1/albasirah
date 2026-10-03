import { IconMosque } from "./icons";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[900] px-[6%] py-4
                       flex justify-between items-center
                       bg-cream/90 backdrop-blur-md
                       border-b border-emerald/10">
      <a href="/" className="flex items-center gap-3 no-underline">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark
                        flex items-center justify-center
                        shadow-[0_4px_14px_rgba(13,92,74,0.3)]">
          <IconMosque size={22} color="#d4af37" />
        </div>
        <div className="leading-none">
          <div className="font-extrabold text-emerald-dark tracking-[2px] text-[1.1rem]">
            AL BASIRAH
          </div>
          <small className="block text-[0.55rem] tracking-[2.5px] text-gold font-medium mt-1">
            VISION INTÉRIEURE
          </small>
        </div>
      </a>

      <div className="flex gap-1 bg-emerald/8 p-1 rounded-full">
        <button className="px-3.5 py-1.5 rounded-full text-xs font-semibold
                           bg-emerald text-white">
          FR
        </button>
        <button className="px-3.5 py-1.5 rounded-full text-xs font-semibold
                           text-emerald">
          AR
        </button>
      </div>
    </header>
  );
}