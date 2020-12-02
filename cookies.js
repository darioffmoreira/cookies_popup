function cookies(functions) {
  const container = document.querySelector(".cookies-container");
  const save = document.querySelector(".cookies-save");

  if (!container || !save) return null;

  const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
  console.log(localPref);

  if (localPref) activateFunctions(localPref);

  function getFormPref() {
    // Convert NodeList to Array, two examples:

    // One way, use Array.from()
    return Array.from(document.querySelectorAll("[data-function]"))
      .filter((element) => element.checked)
      .map((element) => element.getAttribute("data-function"));

    // Another way, use  [...]
    // const inputs = [...document.querySelectorAll("[data-function]")];
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none';
    // console.log(pref);
    // console.log(functions);

    // Save on local Storage
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
    // console.log(pref);
  }

  save.addEventListener("click", handleSave);

  // console.log(save);
}

function marketing () {
    console.log('Função de Marketing');
}

function analytics () {
    console.log('Função de Analytics');
}

cookies({
    marketing: marketing,
    analytics: analytics,
});
