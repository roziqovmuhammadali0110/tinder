export const i18n = {
  defaultLocale: "uz",
  locales: ["en", "uz", "ru"], // update Language Type from types folder, if updated
} as const;

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  uz: () => import("./locales/uz.json").then((module) => module.default),
  ru: () => import("./locales/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: (typeof i18n)["locales"][number]) =>
  dictionaries[locale]?.() ?? dictionaries.en();
