//adding a 16x16 grid square to the site

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const gridColumn = document.createElement("div");
  gridColumn.className = "gridColumn";
  container.appendChild(gridColumn);
  for (let j = 0; j < 16; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "gridSquare";
    gridColumn.appendChild(gridSquare);
  }
}

//make function to change background color of grid squares on hover

const allGridSquares = document.querySelectorAll(".gridSquare");

allGridSquares.forEach((square) => {
  square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
  });
});