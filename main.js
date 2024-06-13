const container = document.querySelector(".container");
for (i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.className = "grid";
  container.appendChild(squareDiv);
  squareDiv.addEventListener("mouseover", () => {
    squareDiv.classList.add("trail");
  });
  container.appendChild(squareDiv);
}
