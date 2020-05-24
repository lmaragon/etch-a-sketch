const grid_container = document.querySelector('.container');

console.log(grid_container);

// Create grid
for(let i=0; i<256; i++){
    grid_container.innerHTML += '<div class="cell"></div>';
}