//adding a 16x16 grid square to the site

const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.className = "gridSquare";
  container.appendChild(gridSquare);
  gridSquare.style.border = '1px solid grey';



  }


//make function to change background color of grid squares on hover

const allGridSquares = document.querySelectorAll(".gridSquare");

allGridSquares.forEach((square) => {
  square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
  });
});
