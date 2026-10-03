import { IconPlay, IconStar, IconCheck, IconSpeaker } from "./icons";

const audios = [
  { t: "Les 40 Hadiths Nawawi", a: "Cheikh Ibn Baz" },
  { t: "Explication du Tajwid", a: "Cheikh Al-Albani" },
  { t: "Riyad As-Salihin", a: "Cheikh Uthaymin" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center
                        px-[6%] pt-32 pb-16 overflow-hidden
                        bg-gradient-to-b from-cream to-[#f0e9d9]">

      {/* Blobs décoratifs */}
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-35
                      bg-emerald -top-24 -left-24" />
      <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-35
                      bg-gold -bottom-20 -right-20" />
      <div className="absolute w-[250px] h-[250px] rounded-full blur-[80px] opacity-20
                      bg-terracotta top-[40%] right-[20%]" />

      <div className="relative z-10 max-w-[1200px] w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texte gauche */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-emerald/12
                          px-4 py-2 rounded-full text-xs font-semibold text-emerald
                          tracking-wider mb-6 shadow-sm">
            <IconStar size={14} color="#d4af37" />
            APPLICATION ISLAMIQUE AUDIO
          </div>

          <h1 className="font-amiri font-bold text-emerald-dark
                         text-[clamp(2.8rem,6vw,4.5rem)] leading-none mb-2">
            AL BASIRAH
          </h1>
          <div className="font-amiri font-bold text-gold
                          text-[clamp(1.5rem,3vw,2.2rem)] mb-6" dir="rtl">
            بصيرة
          </div>

          <p className="text-gray-500 text-base max-w-[520px] mb-9 mx-auto md:mx-0">
            Écoutez la parole des savants, découvrez les hadiths authentiques
            et nourrissez votre âme. Une bibliothèque audio islamique en
            français et en arabe.
          </p>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                                   bg-emerald text-white font-semibold text-sm
                                   shadow-[0_10px_25px_rgba(13,92,74,0.25)]
                                   hover:bg-emerald-dark hover:-translate-y-0.5
                                   transition-all">
              <IconPlay size={16} color="#fff" />
              Commencer l'écoute
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                                   bg-white text-emerald-dark font-semibold text-sm
                                   border-2 border-emerald/15
                                   hover:border-gold hover:text-gold transition-all">
              En savoir plus
            </a>
          </div>
        </div>

        {/* Carte audio droite */}
        <div className="relative flex justify-center">
          <div className="absolute top-[10%] -left-4 bg-white rounded-2xl px-3.5 py-2.5
                          flex items-center gap-2 shadow-xl animate-float hidden md:flex">
            <IconStar size={16} color="#d4af37" />
            <span className="text-xs font-semibold text-emerald-dark">500+ audios</span>
          </div>
          <div className="absolute bottom-[15%] -right-4 bg-white rounded-2xl px-3.5 py-2.5
                          flex items-center gap-2 shadow-xl animate-float hidden md:flex"
               style={{ animationDelay: "1.5s" }}>
            <span className="text-terracotta"><IconCheck size={16} /></span>
            <span className="text-xs font-semibold text-emerald-dark">100% authentique</span>
          </div>

          <div className="bg-white rounded-[28px] p-7 w-full max-w-[380px]
                          shadow-[0_30px_60px_rgba(13,92,74,0.15)]
                          relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5
                            bg-gradient-to-r from-emerald via-gold to-terracotta" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald to-emerald-light
                              flex items-center justify-center p-3">
                <IconSpeaker size={24} />
              </div>
              <div>
                <div className="font-bold text-emerald-dark text-sm">Bibliothèque Audio</div>
                <div className="text-xs text-gray-500">Les savants de référence</div>
              </div>
            </div>

            {audios.map((a, i) => (
              <div key={i} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-cream
                                      mb-3 hover:bg-[#f0e9d9] hover:translate-x-1
                                      transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center
                                shadow-[0_4px_10px_rgba(212,175,55,0.35)] shrink-0">
                  <IconPlay size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-emerald-dark truncate">{a.t}</div>
                  <div className="text-xs text-gray-500 truncate">{a.a}</div>
                </div>
                <div className="flex items-end gap-[3px] h-5">
                  {[0,1,2,3].map((n) => (
                    <span key={n}
                          className="w-[3px] bg-emerald rounded-sm animate-eq"
                          style={{ animationDelay: `${n * 0.15}s`, height: `${8 + (n % 3) * 4}px` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}