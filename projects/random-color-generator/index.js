const acceptable = "0123456789ABCDEF";

function getRandomHexColor() {
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += acceptable.charAt(Math.floor(Math.random() * acceptable.length));
  }

  return color;
}

/** @param {Number} amountOfColors */
function generateColors(amountOfColors) {
  let colors = [];

  for (let i = 0; i < amountOfColors; i++) {
    const colorCode = getRandomHexColor();
    colors.push(`#${colorCode}`);
  }

  return colors;
}

// App Code
const mainElement = document.querySelector("main");
const inp = document.querySelector("#value");
const submitButton = document.querySelector("#btn_generate");

submitButton.addEventListener("click", () => {
  mainElement.innerHTML = "";

  const colors = generateColors(inp.value);

  colors.forEach((c) => {
    const group = document.createElement("div");
    group.classList.add("color-group");

    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = c;

    const code = document.createElement("p");
    code.classList.add("color-code");
    code.textContent = c;

    group.appendChild(box);
    group.appendChild(code);

    mainElement.appendChild(group);
  });
});
