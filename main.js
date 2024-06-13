const container = document.querySelector(".container");

let makeBoard = (gridSize) => {
  for (i = 0; i < gridSize ** 2; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.className = "grid";
    squareDiv.style.width = `calc(100% / ${gridSize})`;
    squareDiv.style.height = `calc(100% / ${gridSize})`;
    container.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", () => {
      squareDiv.classList.add("trail");
    });
    squareDiv.addEventListener("touchstart", () => {
      squareDiv.classList.add("trail");
    });
    squareDiv.addEventListener("touchmove", (e) => {
      e.preventDefault(); // Prevent scrolling while drawing
      const touch = e.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      if (element && element.classList.contains("grid")) {
        element.classList.add("trail");
      }
    });
    container.appendChild(squareDiv);
  }
};

let resetBoard = () => {
  let gridSize = prompt("Enter new grid size (e.g. 16 for 16x16)", "16");
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Input value must be below 100");
    return;
  }
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeBoard(gridSize);
};

makeBoard(16);
