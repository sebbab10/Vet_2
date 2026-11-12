(function () {
  const C = window.DYZUR, S = window.dyzurStatus();
  const $ = id => document.getElementById(id);
  const isMain = !!$("hero-call");

  document.querySelectorAll("[data-doctor]").forEach(e => e.textContent = C.doctor);
  document.querySelectorAll("[data-clinic]").forEach(e => e.textContent = C.clinic);
  document.querySelectorAll("[data-phone]").forEach(e => { e.textContent = C.phoneLabel; if (e.tagName === "A") e.href = "tel:" + C.phone; });
  document.querySelectorAll("[data-alt-phone]").forEach(e => { e.textContent = C.altPhoneLabel; if (e.tagName === "A") e.href = "tel:" + C.altPhone; });
  document.querySelectorAll("[data-alt-name]").forEach(e => e.textContent = C.altName);
  document.querySelectorAll("[data-next]").forEach(e => e.textContent = S.nextText);
  document.querySelectorAll("[data-closed-info]").forEach(e => e.textContent = S.manual ? C.override.message : C.unavailableInfo);

  const hours = $("hours-list");
  if (hours) hours.innerHTML = C.hoursText.map(r => `<li><span>${r[0]}</span><strong>${r[1]}</strong></li>`).join("");

  document.documentElement.dataset.status = S.open ? "open" : "closed";

  if (!S.open && (S.manual || C.redirectWhenClosed) && isMain) { location.replace("nieobecny.html"); return; }

  const pill = $("status-pill");
  if (pill) {
    pill.querySelector("b").textContent = S.open ? "Dyżur aktywny teraz" : "Poza godzinami dyżuru";
    $("status-sub").textContent = S.open ? "Lekarz odbiera telefon." : (S.nextText ? "Następny dyżur: " + S.nextText : "");
  }
  const call = $("hero-call");
  if (call) {
    if (S.open) { call.href = "tel:" + C.phone; call.querySelector("span").textContent = "Zadzwoń teraz"; }
    else { call.href = "nieobecny.html"; call.querySelector("span").textContent = "Dyżur nieaktywny"; call.classList.add("btn-muted"); }
  }
  const nl = $("next-line"); if (nl) nl.hidden = !S.nextText;
  const now = $("now-open"); if (now) now.hidden = !S.open;
  const bar = $("closed-bar");
  if (bar) bar.hidden = S.open;
})();
