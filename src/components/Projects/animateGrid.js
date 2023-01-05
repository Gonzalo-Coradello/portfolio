import { wrapGrid } from 'animate-css-grid'

window.addEventListener('DOMContentLoaded', (event) => {
    const gridContainer = document.querySelector('.projectsContainer');
    wrapGrid(gridContainer, {duration: 350, easing: 'linear'});
})



