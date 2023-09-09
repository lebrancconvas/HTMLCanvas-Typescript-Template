import { canvas, ctx } from './canvas';
import { config } from './config';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Time.
let timeStamp = 0;
let latestTime = 0;

// Init.


// Game Loop.
function animate(timeStamp: number) {
  window.requestAnimationFrame(animate);

  // Calculate Time.
  const deltaTime = timeStamp - latestTime;
  latestTime = timeStamp;

  console.log(`Delta Time: ${deltaTime} milliseconds.`);
  console.log(`FPS: ${1000 / deltaTime}`);

  // Clear.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Animation Code.


};

animate(timeStamp);
