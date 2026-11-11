// ====== EDYTUJ TEN PLIK / EDIT THIS FILE ======
window.DYZUR = {
  clinic: "Dyżur Weta",
  doctor: "lek. wet. Anna Kowalska",          // <- imię i nazwisko lekarza
  phone: "+48123456789",                      // <- numer do połączenia (bez spacji)
  phoneLabel: "+48 123 456 789",              // <- jak numer wygląda na stronie
  timeZone: "Europe/Warsaw",

  // Godziny dyżuru. Klucz: 0 = niedziela ... 6 = sobota. [od, do]
  // Jeśli "do" jest wcześniejsze niż "od", dyżur trwa do następnego dnia.
  schedule: {
    1: ["18:00", "08:00"],
    2: ["18:00", "08:00"],
    3: ["18:00", "08:00"],
    4: ["18:00", "08:00"],
    5: ["18:00", "08:00"],
    6: ["00:00", "24:00"],
    0: ["00:00", "24:00"]
  },
  hoursText: [
    ["Poniedziałek – piątek", "18:00 – 8:00"],
    ["Sobota i niedziela", "całą dobę"]
  ],

  // Gdy poza dyżurem: dane kliniki całodobowej (lub inne wskazówki)
  altName: "Całodobowa klinika weterynaryjna",   // <- zmień
  altPhone: "+48222222222",                      // <- zmień
  altPhoneLabel: "+48 222 222 222",              // <- zmień
  unavailableInfo: "Poza godzinami dyżuru lekarz nie odbiera telefonu.",

  // Ręczne wyłączenie (urlop, choroba). Ustaw active: true i zrób commit.
  override: {
    active: false,
    message: "Dyżur jest chwilowo wyłączony.",
    until: ""            // np. "20 listopada" (pokaże: Następny dyżur: 20 listopada)
  },
  // Czy strona główna ma przekierowywać na nieobecny.html poza dyżurem?
  redirectWhenClosed: false
};
