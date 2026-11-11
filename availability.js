// Liczy, czy dyżur jest aktywny. Zwraca { open, nextText }.
(function () {
  const C = window.DYZUR;
  const DAYS = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
  const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

  function nowInZone() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: C.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
    }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(get("weekday"));
    return { day, min: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
  }

  function compute() {
    if (C.override.active) return { open: false, manual: true, nextText: C.override.until || "" };
    const { day, min } = nowInZone();
    const today = C.schedule[day], yest = C.schedule[(day + 6) % 7];
    let open = false;
    if (today) {
      const f = toMin(today[0]), t = toMin(today[1]);
      open = t > f ? (min >= f && min < t) : min >= f;
    }
    if (!open && yest) {
      const f = toMin(yest[0]), t = toMin(yest[1]);
      if (t <= f && min < t) open = true;
    }
    let nextText = "";
    if (!open) {
      for (let i = 0; i < 8; i++) {
        const d = (day + i) % 7, s = C.schedule[d];
        if (s && (i > 0 || toMin(s[0]) > min)) {
          nextText = (i === 0 ? "dziś" : i === 1 ? "jutro" : DAYS[d]) + " od " + s[0].replace(/^0/, "");
          break;
        }
      }
    }
    return { open, manual: false, nextText };
  }
  window.dyzurStatus = compute;
})();
