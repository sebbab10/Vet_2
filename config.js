// ====== EDYTUJ TEN PLIK / EDIT THIS FILE ======
window.DYZUR = {
  clinic: "Nocny dyżur weterynaryjny w Suwałkach",
  doctor: " ",          // <- imię i nazwisko lekarza
  phone: "+48574262755",                      // <- numer do połączenia (bez spacji)
  phoneLabel: "+48 574 262 755",              // <- jak numer wygląda na stronie
  timeZone: "Europe/Warsaw",

  // Godziny dyżuru. Klucz: 0 = niedziela ... 6 = sobota. [od, do]
  // Jeśli "do" jest wcześniejsze niż "od", dyżur trwa do następnego dnia.
  schedule: {
    1: ["21:00", "06:00"],
    2: ["21:00", "06:00"],
    3: ["21:00", "06:00"],
    4: ["21:00", "06:00"],
    5: ["21:00", "06:00"],
    6: ["21:00", "06:00"],
    0: ["21:00", "06:00"]
  },
  hoursText: [
    ["Codziennie", "21:00 – 6:00"]
  ],

  // Gdy poza dyżurem: dane kliniki całodobowej (lub inne wskazówki)
  altName: " ",   // <- Całodobowa klinika weterynaryjna
  altPhone: " ",                      // <- +48222222222
  altPhoneLabel: " ",              // <- +48222222222
  unavailableInfo: "Poza godzinami dyżuru lekarz nie odbiera telefonu.",

  // Ręczne wyłączenie (urlop, choroba). Ustaw active: true i zrób commit.
  override: {
    active: false,
    message: "Niestety, żaden z lekarzy nie mógł objąć dzisiaj dyżuru.",
    until: "12 listopada"            // np. "20 listopada" (pokaże: Następny dyżur: 20 listopada)
  },
  // Czy strona główna ma przekierowywać na nieobecny.html poza dyżurem?
  redirectWhenClosed: false
};
