class Overworld {
  constructor(config) {
    // Pass in an element for the Overworld to operate on
    this.element = config.element;
    // Reference to the canvas
    this.canvas = this.element.querySelector(".game-canvas");
    // Gives us access to the drawing methods of canvas, short for context
    this.ctx = this.canvas.getContext("2d");
  }

  // Short for initialization
  init() {
    // The image needs to be loaded to the browser in memory to be able to draw the pixel data from the image onto a canvas context
    const image = new Image();
    // Once the browser creates the image and downloads the assets, the pixels will be copied over to the canvas context
    image.onload = () => {
      // Takes the image and a x and y coordinate of where we want to draw the image
      this.ctx.drawImage(image,0,0);
    }
    // Gives the image a src
    image.src = "/images/maps/DemoLower.png";

    // Hero Character & Shadow
    const x = 5;
    const y = 6;

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, // Starting point of the left cut
        0, // top cut
        32, // width of cut in pixels
        32, // height of cut
        x * 16 - 8, // Position of the character on the map
        y * 16 - 18,
        32, // Size at which the character will be drawn. Size is the natural size of the cut
        32 
      );
    }
    shadow.src = "/images/characters/shadow.png";

    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
          hero,
          0, // Starting point of the left cut
          0, // top cut
          32, // width of cut in pixels
          32, // height of cut
          x * 16 - 8, // Position of the character on the map
          y * 16 - 18,
          32, // Size at which the character will be drawn. Size is the natural size of the cut
          32 
        );
    }
    hero.src = "/images/characters/people/hero.png";
  }
}