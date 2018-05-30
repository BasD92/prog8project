"use strict";
var Car = (function () {
    function Car() {
        console.log("car created");
    }
    Car.prototype.update = function () {
        console.log("vrooom!");
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("Singleton game created!");
        this.c = new Car();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.c.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
//# sourceMappingURL=main.js.map