const updateViewportWidth = () => {
    const r = document.querySelector(':root');
    r.style.setProperty('--viewport-width', innerWidth);
}
updateViewportWidth();
window.addEventListener('resize', updateViewportWidth);