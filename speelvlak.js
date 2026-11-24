const stage = document.querySelector('main');
const tour = stage.querySelector('iframe');

// Keep the original CSS and game engine on the same fixed viewport.
function fitTour() {
  const widthScale = stage.clientWidth / tour.width;
  const heightScale = stage.clientHeight / tour.height;
  tour.style.setProperty('--scale', Math.min(1, widthScale, heightScale));
}

fitTour();
new ResizeObserver(fitTour).observe(stage);
