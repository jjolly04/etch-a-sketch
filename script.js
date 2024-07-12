//adding a 16x16 grid square to the site

const container = document.querySelector(".container");

function generateGrid(numSquares) {
  for (let i = 0; i < numSquares; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.className = "gridColumn";
    container.appendChild(gridColumn);
    for (let j = 0; j < numSquares; j++) {
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
}

generateGrid(16);


//configure resizing of grid on button press;
const resizeButton = document.querySelector(".resizeButton");

resizeButton.addEventListener("click", () => {
  let newGridSize = parseInt(
    prompt("What size do you want to drawing area to be? Max size is 100: ")
  );
  if (newGridSize > 100) {
    newGridSize = 100;
  }
  console.log(newGridSize);

  const allColumns = document.querySelectorAll(".gridColumn");

  allColumns.forEach((column) => {
    column.remove();
  });

  generateGrid(newGridSize);
});
