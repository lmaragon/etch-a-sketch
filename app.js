const grid_container = document.querySelector('.container');
const reset_button = document.querySelector('.reset');

// Create grid
const create_grid = (side_length) => {
    document.documentElement.style.setProperty("--side", side_length);
    total_sq = side_length * side_length;

    for(let i=0; i<total_sq; i++){
        grid_container.innerHTML += '<div class="cell"></div>';
    }
}

// Listen to hover
const reset_color = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (el) => {
            cell.style.backgroundColor = "red";
        });
    });
}

create_grid(16);
reset_color();

// Listen to reset
reset_button.addEventListener('click', () => {
    let s = parseInt(prompt("Enter side of square", "0"));
    grid_container.innerHTML = "";
    create_grid(s);
    reset_color();

})