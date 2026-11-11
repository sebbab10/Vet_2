// ====== EDYTUJ TEN PLIK / EDIT THIS FILE ======
window.DYZUR = {
  clinic: "Nocny dyżur weterynaryjny w Suwałkach",
  doctor: "lek. wet. ",          // <- imię i nazwisko lekarza
  phone: "+48662350261",                      // <- numer do połączenia (bez spacji)
  phoneLabel: "+48 000 456 789",              // <- jak numer wygląda na stronie
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
    ["Poniedziałek – piątek", "21:00 – 6:00"],
    ["Sobota i niedziela", "21:00 - 6:00"]
  ],

  // Gdy poza dyżurem: dane kliniki całodobowej (lub inne wskazówki)
  altName: "Całodobowa klinika weterynaryjna",   // <- zmień
  altPhone: "+48222222222",                      // <- zmień
  altPhoneLabel: "+48 222 222 222",              // <- zmień
  unavailableInfo: "Poza godzinami dyżuru lekarz nie odbiera telefonu.",

  // Ręczne wyłączenie (urlop, choroba). Ustaw active: true i zrób commit.
  override: {
    active: true,
    message: "Dyżur jest chwilowo wyłączony.",
    until: ""            // np. "20 listopada" (pokaże: Następny dyżur: 20 listopada)
  },
  // Czy strona główna ma przekierowywać na nieobecny.html poza dyżurem?
  redirectWhenClosed: false
};
