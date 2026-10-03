export type Lang = "fr" | "en" | "ar";

export const translations = {
  fr: {
    nav: {
      live: "Live",
      warning: "Mise en garde",
      new: "Nouveau",
      faq: "FAQ",
      conditions: "Conditions",
      support: "Support",
      salafiya: "Salafiya",
    },
    audio: {
      title: "Bibliothèque Audio",
      subtitle: "Écoutez les enseignements des savants et oustaz",
      bySavants: "Par nos Savants",
      byOustaz: "Par nos Oustaz",
      quran: "Coran",
      seeAll: "Voir tout",
      minutes: "min",
      empty: "Aucun audio pour le moment",
      login: "Connectez-vous pour écouter",
    },
    common: {
      back: "Retour",
      loading: "Chargement...",
      all: "Tout",
    },
  },
  en: {
    nav: {
      live: "Live",
      warning: "Warning",
      new: "New",
      faq: "FAQ",
      conditions: "Terms",
      support: "Support",
      salafiya: "Salafiyah",
    },
    audio: {
      title: "Audio Library",
      subtitle: "Listen to teachings of scholars and teachers",
      bySavants: "By our Scholars",
      byOustaz: "By our Teachers",
      quran: "Quran",
      seeAll: "See all",
      minutes: "min",
      empty: "No audio yet",
      login: "Log in to listen",
    },
    common: {
      back: "Back",
      loading: "Loading...",
      all: "All",
    },
  },
  ar: {
    nav: {
      live: "مباشر",
      warning: "تنبيه",
      new: "جديد",
      faq: "الأسئلة الشائعة",
      conditions: "الشروط",
      support: "الدعم",
      salafiya: "السلفية",
    },
    audio: {
      title: "المكتبة الصوتية",
      subtitle: "استمع إلى دروس العلماء والأساتذة",
      bySavants: "من علمائنا",
      byOustaz: "من أساتذتنا",
      quran: "القرآن",
      seeAll: "عرض الكل",
      minutes: "دقيقة",
      empty: "لا يوجد صوت حالياً",
      login: "سجّل الدخول للاستماع",
    },
    common: {
      back: "رجوع",
      loading: "جارٍ التحميل...",
      all: "الكل",
    },
  },
};

export function t(lang: Lang) {
  return translations[lang];
}

export function isRTL(lang: Lang) {
  return lang === "ar";
}