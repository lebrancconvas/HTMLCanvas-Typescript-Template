export class KeyboardHandler {
  lastKey: string;

  constructor() {
    this.lastKey = '';

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      switch(event.code) {
        // Add Action when key is pressed.
        case 'ArrowUp':
          this.lastKey = 'PRESS up';
          break;
        case 'ArrowDown':
          this.lastKey = 'PRESS down';
          break;
        case 'ArrowLeft':
          this.lastKey = 'PRESS left';
          break;
        case 'ArrowRight':
          this.lastKey = 'PRESS right';
          break;
        case 'Space':
          this.lastKey = 'PRESS space';
          break;
        case 'Enter':
          this.lastKey = 'PRESS enter';
          break;
        case 'Escape':
          this.lastKey = 'PRESS escape';
          break;
        case 'KeyW':
          this.lastKey = 'PRESS w';
          break;
        case 'KeyA':
          this.lastKey = 'PRESS a';
          break;
        case 'KeyS':
          this.lastKey = 'PRESS s';
          break;
        case 'KeyD':
          this.lastKey = 'PRESS d';
          break;
      }
    });

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      switch(event.code) {
        // Add Action when key is released.
        case 'ArrowUp':
          this.lastKey = 'RELEASE up';
          break;
        case 'ArrowDown':
          this.lastKey = 'RELEASE down';
          break;
        case 'ArrowLeft':
          this.lastKey = 'RELEASE left';
          break;
        case 'ArrowRight':
          this.lastKey = 'RELEASE right';
          break;
        case 'Space':
          this.lastKey = 'RELEASE space';
          break;
        case 'Enter':
          this.lastKey = 'RELEASE enter';
          break;
        case 'Escape':
          this.lastKey = 'RELEASE escape';
          break;
        case 'KeyW':
          this.lastKey = 'RELEASE w';
          break;
        case 'KeyA':
          this.lastKey = 'RELEASE a';
          break;
        case 'KeyS':
          this.lastKey = 'RELEASE s';
          break;
        case 'KeyD':
          this.lastKey = 'RELEASE d';
          break;
      }
    });
  }
};
