const grid_container = document.querySelector('.container');

// Create grid
for(let i=0; i<256; i++){
    grid_container.innerHTML += '<div class="cell"></div>';
}

const cells = document.querySelectorAll('.cell');

// Listen to hover
cells.forEach(cell => {
    cell.addEventListener('mouseover', (el) => {
        cell.style.backgroundColor = "red";
        
    });
});
