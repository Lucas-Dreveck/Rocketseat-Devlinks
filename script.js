function toggleMode() {
  const html = document.documentElement, img = document.querySelector("#profile img");
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, com óculos escuro, jaqueta e um gradiente azul e roxo de fundo")
} else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, com óculos, jaqueta e um gradiente azul e roxo de fundo")
  }

}
