
const word = document.getElementById('word')
const result = document.getElementById('result')

word.addEventListener('keyup', () => {
  let length = word.value.length
  result.innerText = length
})



// ----------------------------------------------------
// Dark Theme
const light = "styles/light.css";
const dark = "styles/dark.css";
const btnMode = document.getElementById("btn-mode");
const cssTheme = document.getElementById("theme");

btnMode.addEventListener('click', () => {


    if (cssTheme.getAttribute("href") === light) {
        cssTheme.attributes.href.value = dark;
        btnMode.innerHTML = "Light Mode 🌞";
      } else {
        cssTheme.attributes.href.value = light;
        btnMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      }
})