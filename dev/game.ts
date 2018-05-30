class Game {

  // Game instance
  private static instance: Game;

  public c: Car;

  // Private constructor Singleton
  private constructor() {
    console.log("Singleton game created!");

    this.c = new Car();

    this.gameLoop();
  }

  private gameLoop() {
    // Test game loop
    this.c.update();

    requestAnimationFrame(()=>this.gameLoop());
  }

  // Check if Game object exists
  public static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}
