export class MouseHandler {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;

    window.addEventListener('click', (event: MouseEvent) => {
      this.x = event.clientX;
      this.y = event.clientY;
    });
  }
};
