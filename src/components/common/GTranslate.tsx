import { useEffect, useState } from "react";

import "./GTranslate.css";

const GTRANSLATE_SCRIPT_ID = "gtranslate-script";

const gtranslateSettings = {
  default_language: "en",
  languages: ["en", "fr", "ru"],
  native_language_names: true,
  wrapper_selector: "#north-language-switcher",
  switcher_open_direction: "bottom",
};

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ru", label: "RU" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

declare global {
  interface Window {
    gtranslateSettings?: typeof gtranslateSettings;
    doGTranslate?: (languagePair: string) => void;
  }
}

export function GTranslateScript() {
  useEffect(() => {
    window.gtranslateSettings = gtranslateSettings;

    if (document.getElementById(GTRANSLATE_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");

    script.id = GTRANSLATE_SCRIPT_ID;
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}

function getCurrentLanguage(): LanguageCode {
  const translationCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("googtrans="));

  const cookieLanguage = translationCookie?.split("/").pop();

  return languages.some((language) => language.code === cookieLanguage)
    ? (cookieLanguage as LanguageCode)
    : "en";
}

function changeLanguage(language: LanguageCode) {
  const languagePair = `en|${language}`;

  if (window.doGTranslate) {
    window.doGTranslate(languagePair);
    return;
  }

  const selector = document.querySelector<HTMLSelectElement>(".gt_selector");

  if (selector) {
    selector.value = languagePair;
    selector.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }

  const option = Array.from(document.querySelectorAll<HTMLAnchorElement>(".gt_option a"))
    .find((link) => link.dataset.gtLang === language || link.textContent?.trim().toLowerCase().startsWith(language));

  option?.click();
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(getCurrentLanguage);

  const handleLanguageChange = (language: LanguageCode) => {
    setActiveLanguage(language);
    changeLanguage(language);
  };

  return (
    <div className="north-language-switcher" aria-label="Choose language" translate="no">
      <div className="north-language-switcher__options">
        {languages.map((language, index) => (
          <div className="north-language-switcher__item" key={language.code}>
            {index > 0 && <span className="north-language-switcher__separator" aria-hidden="true" />}
            <button
              type="button"
              className={`north-language-switcher__option${activeLanguage === language.code ? " is-active" : ""}`}
              aria-pressed={activeLanguage === language.code}
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.label}
            </button>
          </div>
        ))}
      </div>

      <div id="north-language-switcher" className="gtranslate_wrapper" aria-hidden="true" />
    </div>
  );
}
