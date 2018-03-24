/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Louvre/Louvre.ts":
/*!******************************!*\
  !*** ./src/Louvre/Louvre.ts ***!
  \******************************/
/*! exports provided: playerMasterPiece, healthBarMasterPiece, treeTrunkMasterPiece, treeLeafMasterPiece, graveStoneMasterPiece, projectileMasterPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMasterPiece", function() { return playerMasterPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthBarMasterPiece", function() { return healthBarMasterPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeTrunkMasterPiece", function() { return treeTrunkMasterPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeLeafMasterPiece", function() { return treeLeafMasterPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graveStoneMasterPiece", function() { return graveStoneMasterPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectileMasterPiece", function() { return projectileMasterPiece; });
/**
 * Get master peice for player object
 * @param object The player object
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 */
function playerMasterPiece(object, renderOffsetX, renderOffsetY) {
    return {
        palette: ["#abab9a", "#775050", "#AAAAAA"].concat(object.teamColor),
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY,
        width: object.width,
        height: object.height,
        facing: 0,
        strokes: [{
                cellX: 0,
                cellY: 2,
                width: 4,
                height: 2,
                swatch: 3
            }, {
                cellX: 1,
                cellY: 0,
                width: 2,
                height: 2,
                swatch: 0
            }, {
                cellX: 0,
                cellY: 3,
                width: 1,
                height: 1,
                swatch: 2
            }, {
                cellX: 3,
                cellY: 3,
                width: 1,
                height: 1,
                swatch: 2
            }, {
                cellX: 1,
                cellY: 4,
                width: 1,
                height: 2,
                swatch: 1
            }, {
                cellX: 2,
                cellY: 4,
                width: 1,
                height: 2,
                swatch: 1
            }],
    };
}
/**
 * Get master piece for object's health bar
 * @param object The object that needs a health bar
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 * @param cubeSize The cube render size, required when drawing free hand
 */
function healthBarMasterPiece(object, renderOffsetX, renderOffsetY, cubeSize) {
    return {
        palette: ["#00a400", "#FF0000"],
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY - (object.height + 2) * cubeSize / 2,
        width: object.width * cubeSize,
        height: 1 * cubeSize,
        facing: 0,
        strokes: [{
                cellX: 0,
                cellY: 0,
                width: object.health / object.maxHealth * object.width * cubeSize,
                height: cubeSize * 3 / 4,
                swatch: (object.health > object.maxHealth / 3) ? 0 : 1,
            },],
        freeHand: true
    };
}
/**
 * Get master piece for tree object
 * @param object The tree object
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 */
function treeTrunkMasterPiece(object, renderOffsetX, renderOffsetY) {
    return {
        palette: ["#993300"],
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY,
        width: object.width,
        height: object.height,
        facing: object.facing,
        strokes: [{
                cellX: 0,
                cellY: 0,
                width: object.width,
                height: object.height,
                swatch: 0
            },],
    };
}
// TODO: Change leaf rendering depending on tree health
/**
 * Get master piece for tree object's leaves
 * @param object The tree object
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 */
function treeLeafMasterPiece(object, renderOffsetX, renderOffsetY) {
    return {
        palette: ["#228822"],
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY,
        width: object.width,
        height: object.height,
        facing: object.facing,
        strokes: [{
                cellX: -2,
                cellY: -4,
                width: object.width * 2,
                height: object.height,
                swatch: 0
            }, {
                cellX: 0,
                cellY: -10,
                width: 4,
                height: 7,
                swatch: 0
            },],
    };
}
/**
 * Get master piece for gravestone object
 * @param object The gravestone object
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 */
function graveStoneMasterPiece(object, renderOffsetX, renderOffsetY) {
    return {
        palette: ["#888888"],
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY,
        width: object.width,
        height: object.height,
        facing: object.facing,
        strokes: [{
                cellX: 0,
                cellY: 1,
                width: object.width,
                height: 1,
                swatch: 0,
            }, {
                cellX: 1,
                cellY: 0,
                width: 1,
                height: object.height,
                swatch: 0,
            }]
    };
}
/**
 * Get master piece for basic projectile
 * @param object The projectile object
 * @param renderOffsetX Horizontal offset for rendering objects
 * @param renderOffsetY Vertical offset for render objects
 */
function projectileMasterPiece(object, renderOffsetX, renderOffsetY) {
    return {
        palette: ["#FF6666", "#66FF66", "#6666FF", "#FFFF66", "#FF66FF", "#66FFFF"],
        posX: object.x - renderOffsetX,
        posY: object.y - renderOffsetY,
        width: object.width,
        height: object.height,
        facing: object.facing,
        strokes: [{
                cellX: 0,
                cellY: 0,
                width: object.width,
                height: object.height,
                swatch: Math.floor(Math.random() * 6)
            }]
    };
}


/***/ }),

/***/ "./src/Popova/Popova.ts":
/*!******************************!*\
  !*** ./src/Popova/Popova.ts ***!
  \******************************/
/*! exports provided: Popova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popova", function() { return Popova; });
var Popova = /** @class */ (function () {
    function Popova() {
    }
    /**
     * Initializes Popova's canvas
     * @param canvasId Id of html canvas element
     * @param cubeSize Render size for each cube when drawing with cubes
     */
    Popova.prototype.init = function (canvasId, cubeSize) {
        this.canvas = document.getElementById(canvasId);
        this.cubeSize = cubeSize;
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
    };
    /**
     * Renders a grid on the canvas
     * @param spacing Number of pixels between grid lines
    */
    Popova.prototype.drawGrid = function (spacing, offsetX, offsetY) {
        this.ctx.beginPath();
        this.ctx.save();
        // Draw grid on background
        this.ctx.strokeStyle = "#d0d0d0";
        for (var x = (!!offsetX) ? offsetX % spacing : 0; x <= this.width; x += spacing) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.stroke();
        }
        for (var y = (!!offsetY) ? offsetY % spacing : 0; y <= this.height; y += spacing) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }
        this.ctx.restore();
    };
    /**
     * Draws a masterpiece to the canvas
     * @param masterPiece Definition for what to draw
     */
    Popova.prototype.draw = function (masterPiece) {
        var _this = this;
        this.ctx.save();
        this.prepCanvas(masterPiece.posX, masterPiece.posY, masterPiece.width, masterPiece.height, masterPiece.facing, masterPiece.freeHand);
        masterPiece.strokes.forEach(function (stroke) {
            _this.renderStroke(stroke, masterPiece.palette, masterPiece.freeHand);
        });
        this.ctx.restore();
    };
    /**
     * Centers the canvas on position, and rotates to a certain facing
     * @param positionX The x position of what is being drawn
     * @param positionY The y position of what is being drawn
     * @param width The width of what is being drawn
     * @param height The height of what is being drawn
     * @param degrees Degrees to rotate the canvas by
     * @param freeHand If the stroke is rendered with blocks or free hand
     */
    Popova.prototype.prepCanvas = function (positionX, positionY, width, height, degrees, freeHand) {
        this.ctx.beginPath();
        this.ctx.translate(positionX, positionY);
        this.ctx.rotate(degrees * Math.PI / 180);
        if (freeHand) {
            this.ctx.translate(-width / 2, -height / 2);
        }
        else {
            this.ctx.translate(-width * this.cubeSize / 2, -height * this.cubeSize / 2);
        }
    };
    /**
     * Renders
     * @param stroke Stroke to render
     * @param palette Contains the master piece's color swatches
     * @param freeHand If the stroke is rendered with blocks or free hand
     */
    Popova.prototype.renderStroke = function (stroke, palette, freeHand) {
        this.ctx.fillStyle = palette[stroke.swatch];
        if (freeHand) {
            this.ctx.fillRect(stroke.cellX, stroke.cellY, stroke.width, stroke.height);
        }
        else {
            this.ctx.fillRect(stroke.cellX * this.cubeSize, stroke.cellY * this.cubeSize, stroke.width * this.cubeSize, stroke.height * this.cubeSize);
        }
    };
    /**
     * Erases everything on the canvas
     */
    Popova.prototype.wipeCanvas = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    /**
     * Returns the canvas' width and height
     */
    Popova.prototype.size = function () {
        return { width: this.width, height: this.height };
    };
    /**
     * Returns Popova's cube render size
     */
    Popova.prototype.getCubeSize = function () {
        return this.cubeSize;
    };
    /**
     * Sets Popova's cube render size
     * @param size Value for cube render size
     */
    Popova.prototype.setCubeSize = function (size) {
        this.cubeSize = size;
    };
    /**
     * Returns mouse position and if mouse is inside canvas
     * @param evt Mouse movement event, containing position information
     */
    Popova.prototype.getMousePos = function (evt) {
        var rect = this.canvas.getBoundingClientRect();
        var posX = evt.clientX - rect.left;
        var posY = evt.clientY - rect.top;
        var offCanvas = false;
        if (posX < 0) {
            posX = 0;
            offCanvas = true;
        }
        if (posY < 0) {
            posY = 0;
            offCanvas = true;
        }
        if (posX > this.width) {
            posX = this.width;
            offCanvas = true;
        }
        if (posY > this.height) {
            posY = this.height;
            offCanvas = true;
        }
        return {
            x: posX,
            y: posY,
            outOfBounds: offCanvas,
        };
    };
    return Popova;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popova_Popova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popova/Popova */ "./src/Popova/Popova.ts");
/* harmony import */ var _Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Louvre/Louvre */ "./src/Louvre/Louvre.ts");


// Socket listener
var socket = io();
var cubeSize;
var gridSize = 48;
var viewRange = 1 / 2;
var playerId;
var renderOffsetX;
var renderOffsetY;
var mousePos;
var playerInput = {
    up: false,
    down: false,
    left: false,
    right: false,
    build: false,
};
mousePos = { x: 0, y: 0, outOfBounds: true };
// Add listeners to document
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 65:// A
            playerInput.left = true;
            break;
        case 87:// W
            playerInput.up = true;
            break;
        case 68:// D
            playerInput.right = true;
            break;
        case 83:// S
            playerInput.down = true;
            break;
    }
});
document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 65:// A
            playerInput.left = false;
            break;
        case 87:// W
            playerInput.up = false;
            break;
        case 68:// D
            playerInput.right = false;
            break;
        case 83:// S
            playerInput.down = false;
            break;
    }
});
function onMouseMove(event) {
    mousePos = foreground.getMousePos(event);
}
window.addEventListener("mousemove", onMouseMove, false);
function onMouseClick(event) {
    if (!mousePos.outOfBounds) {
        socket.emit("mouseDown", {
            sourceId: playerId,
            targetX: (mousePos.x + renderOffsetX),
            targetY: (mousePos.y + renderOffsetY)
        });
    }
}
window.addEventListener("click", onMouseClick, false);
// Init canvas
var background = new _Popova_Popova__WEBPACK_IMPORTED_MODULE_0__["Popova"]();
var env = new _Popova_Popova__WEBPACK_IMPORTED_MODULE_0__["Popova"]();
var foreground = new _Popova_Popova__WEBPACK_IMPORTED_MODULE_0__["Popova"]();
var cover = new _Popova_Popova__WEBPACK_IMPORTED_MODULE_0__["Popova"]();
background.init("background", cubeSize);
env.init("env", cubeSize);
foreground.init("foreground", cubeSize);
cover.init("cover", cubeSize);
// Broadcast player input
setInterval(function () {
    socket.emit("playerInput", playerInput);
}, 1000 / 60);
// Tell the server a new player has joined and handshake
socket.emit("new-player");
socket.on("handshake", function (info) {
    playerId = info.id;
    cubeSize = info.cubeSize;
    background.setCubeSize(cubeSize);
    env.setCubeSize(cubeSize);
    foreground.setCubeSize(cubeSize);
    cover.setCubeSize(cubeSize);
});
// Interpret state and draw objects
socket.on("state", function (objects) {
    foreground.wipeCanvas();
    env.wipeCanvas();
    cover.wipeCanvas();
    var canvasSize = foreground.size();
    // TODO: Add smoothing to camera movement
    renderOffsetX = (!!playerId)
        ? objects[playerId].x + (mousePos.x - (canvasSize.width / 2)) * viewRange - canvasSize.width / 2
        : undefined;
    renderOffsetY = (!!playerId)
        ? objects[playerId].y + (mousePos.y - (canvasSize.height / 2)) * viewRange - canvasSize.height / 2
        : undefined;
    // TODO: Don't wipe background canvas, translate it to match player position
    if (!!objects) {
        background.wipeCanvas();
        background.drawGrid(gridSize, -renderOffsetX, -renderOffsetY);
    }
    for (var id in objects) {
        var object = objects[id];
        switch (object.type) {
            case "player":
                foreground.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["playerMasterPiece"](object, renderOffsetX, renderOffsetY));
                foreground.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["healthBarMasterPiece"](object, renderOffsetX, renderOffsetY, cubeSize));
                break;
            case "projectile":
                env.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["projectileMasterPiece"](object, renderOffsetX, renderOffsetY));
                break;
            case "gravestone":
                env.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["graveStoneMasterPiece"](object, renderOffsetX, renderOffsetY));
                env.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["healthBarMasterPiece"](object, renderOffsetX, renderOffsetY, cubeSize));
                break;
            case "terrain":
                switch (object.subtype) {
                    case "tree":
                        env.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["treeTrunkMasterPiece"](object, renderOffsetX, renderOffsetY));
                        cover.draw(_Louvre_Louvre__WEBPACK_IMPORTED_MODULE_1__["treeLeafMasterPiece"](object, renderOffsetX, renderOffsetY));
                }
                break;
        }
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvdXZyZS9Mb3V2cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcG92YS9Qb3BvdmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7Ozs7O0dBS0c7QUFDRywyQkFBNEIsTUFBVyxFQUFFLGFBQXFCLEVBQUUsYUFBcUI7SUFDdkYsTUFBTSxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxhQUFhO1FBQzlCLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLGFBQWE7UUFDOUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO2dCQUNOLEtBQUss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QUFDLENBQUMsQ0FBQztnQkFDN0YsS0FBSyxDQUFDO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0VBQTRCLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxLQUFLLENBQUM7WUFDVixLQUFLLFlBQVk7Z0JBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxvRUFBNEIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUVBQTJCLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsS0FBSyxDQUFDO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQixLQUFLLE1BQU07d0JBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxtRUFBMkIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQzVFLEtBQUssQ0FBQyxJQUFJLENBQUMsa0VBQTBCLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUNELEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgbWFzdGVyUGllY2UgfSBmcm9tIFwiLi4vUG9wb3ZhL1BvcG92YVwiO1xuXG4vKipcbiAqIEdldCBtYXN0ZXIgcGVpY2UgZm9yIHBsYXllciBvYmplY3RcbiAqIEBwYXJhbSBvYmplY3QgVGhlIHBsYXllciBvYmplY3RcbiAqIEBwYXJhbSByZW5kZXJPZmZzZXRYIEhvcml6b250YWwgb2Zmc2V0IGZvciByZW5kZXJpbmcgb2JqZWN0c1xuICogQHBhcmFtIHJlbmRlck9mZnNldFkgVmVydGljYWwgb2Zmc2V0IGZvciByZW5kZXIgb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTWFzdGVyUGllY2Uob2JqZWN0OiBhbnksIHJlbmRlck9mZnNldFg6IG51bWJlciwgcmVuZGVyT2Zmc2V0WTogbnVtYmVyKTogbWFzdGVyUGllY2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhbGV0dGU6IFtcIiNhYmFiOWFcIiwgXCIjNzc1MDUwXCIsIFwiI0FBQUFBQVwiXS5jb25jYXQob2JqZWN0LnRlYW1Db2xvciksXG4gICAgICAgIHBvc1g6IG9iamVjdC54IC0gcmVuZGVyT2Zmc2V0WCxcbiAgICAgICAgcG9zWTogb2JqZWN0LnkgLSByZW5kZXJPZmZzZXRZLFxuICAgICAgICB3aWR0aDogb2JqZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9iamVjdC5oZWlnaHQsXG4gICAgICAgIGZhY2luZzogMCxcbiAgICAgICAgc3Ryb2tlczogW3tcbiAgICAgICAgICAgIGNlbGxYOiAwLFxuICAgICAgICAgICAgY2VsbFk6IDIsXG4gICAgICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgICAgIGhlaWdodDogMixcbiAgICAgICAgICAgIHN3YXRjaDogM1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjZWxsWDogMSxcbiAgICAgICAgICAgIGNlbGxZOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICBzd2F0Y2g6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2VsbFg6IDAsXG4gICAgICAgICAgICBjZWxsWTogMyxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgc3dhdGNoOiAyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNlbGxYOiAzLFxuICAgICAgICAgICAgY2VsbFk6IDMsXG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgIHN3YXRjaDogMlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjZWxsWDogMSxcbiAgICAgICAgICAgIGNlbGxZOiA0LFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICBzd2F0Y2g6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2VsbFg6IDIsXG4gICAgICAgICAgICBjZWxsWTogNCxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiAyLFxuICAgICAgICAgICAgc3dhdGNoOiAxXG4gICAgICAgIH1dLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgbWFzdGVyIHBpZWNlIGZvciBvYmplY3QncyBoZWFsdGggYmFyXG4gKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCBuZWVkcyBhIGhlYWx0aCBiYXJcbiAqIEBwYXJhbSByZW5kZXJPZmZzZXRYIEhvcml6b250YWwgb2Zmc2V0IGZvciByZW5kZXJpbmcgb2JqZWN0c1xuICogQHBhcmFtIHJlbmRlck9mZnNldFkgVmVydGljYWwgb2Zmc2V0IGZvciByZW5kZXIgb2JqZWN0c1xuICogQHBhcmFtIGN1YmVTaXplIFRoZSBjdWJlIHJlbmRlciBzaXplLCByZXF1aXJlZCB3aGVuIGRyYXdpbmcgZnJlZSBoYW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFsdGhCYXJNYXN0ZXJQaWVjZShvYmplY3Q6IGFueSwgcmVuZGVyT2Zmc2V0WDogbnVtYmVyLCByZW5kZXJPZmZzZXRZOiBudW1iZXIsIGN1YmVTaXplOiBudW1iZXIpOiBtYXN0ZXJQaWVjZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFsZXR0ZTogW1wiIzAwYTQwMFwiLCBcIiNGRjAwMDBcIl0sXG4gICAgICAgIHBvc1g6IG9iamVjdC54IC0gcmVuZGVyT2Zmc2V0WCxcbiAgICAgICAgcG9zWTogb2JqZWN0LnkgLSByZW5kZXJPZmZzZXRZIC0gKG9iamVjdC5oZWlnaHQgKyAyKSAqIGN1YmVTaXplIC8gMixcbiAgICAgICAgd2lkdGg6IG9iamVjdC53aWR0aCAqIGN1YmVTaXplLFxuICAgICAgICBoZWlnaHQ6IDEgKiBjdWJlU2l6ZSxcbiAgICAgICAgZmFjaW5nOiAwLFxuICAgICAgICBzdHJva2VzOiBbe1xuICAgICAgICAgICAgY2VsbFg6IDAsXG4gICAgICAgICAgICBjZWxsWTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBvYmplY3QuaGVhbHRoIC8gb2JqZWN0Lm1heEhlYWx0aCAqIG9iamVjdC53aWR0aCAqIGN1YmVTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBjdWJlU2l6ZSAqIDMgLyA0LFxuICAgICAgICAgICAgc3dhdGNoOiAob2JqZWN0LmhlYWx0aCA+IG9iamVjdC5tYXhIZWFsdGggLyAzKSA/IDAgOiAxLFxuICAgICAgICB9LF0sXG4gICAgZnJlZUhhbmQ6IHRydWV9O1xufVxuXG4vKipcbiAqIEdldCBtYXN0ZXIgcGllY2UgZm9yIHRyZWUgb2JqZWN0XG4gKiBAcGFyYW0gb2JqZWN0IFRoZSB0cmVlIG9iamVjdFxuICogQHBhcmFtIHJlbmRlck9mZnNldFggSG9yaXpvbnRhbCBvZmZzZXQgZm9yIHJlbmRlcmluZyBvYmplY3RzXG4gKiBAcGFyYW0gcmVuZGVyT2Zmc2V0WSBWZXJ0aWNhbCBvZmZzZXQgZm9yIHJlbmRlciBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmVlVHJ1bmtNYXN0ZXJQaWVjZShvYmplY3Q6IGFueSwgcmVuZGVyT2Zmc2V0WDogbnVtYmVyLCByZW5kZXJPZmZzZXRZOiBudW1iZXIpOiBtYXN0ZXJQaWVjZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFsZXR0ZTogW1wiIzk5MzMwMFwiXSxcbiAgICAgICAgcG9zWDogb2JqZWN0LnggLSByZW5kZXJPZmZzZXRYLFxuICAgICAgICBwb3NZOiBvYmplY3QueSAtIHJlbmRlck9mZnNldFksXG4gICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogb2JqZWN0LmhlaWdodCxcbiAgICAgICAgZmFjaW5nOiBvYmplY3QuZmFjaW5nLFxuICAgICAgICBzdHJva2VzOiBbe1xuICAgICAgICAgICAgY2VsbFg6IDAsXG4gICAgICAgICAgICBjZWxsWTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9iamVjdC5oZWlnaHQsXG4gICAgICAgICAgICBzd2F0Y2g6IDBcbiAgICAgICAgfSxdLFxuICAgIH07XG59XG5cbi8vIFRPRE86IENoYW5nZSBsZWFmIHJlbmRlcmluZyBkZXBlbmRpbmcgb24gdHJlZSBoZWFsdGhcbi8qKlxuICogR2V0IG1hc3RlciBwaWVjZSBmb3IgdHJlZSBvYmplY3QncyBsZWF2ZXNcbiAqIEBwYXJhbSBvYmplY3QgVGhlIHRyZWUgb2JqZWN0XG4gKiBAcGFyYW0gcmVuZGVyT2Zmc2V0WCBIb3Jpem9udGFsIG9mZnNldCBmb3IgcmVuZGVyaW5nIG9iamVjdHNcbiAqIEBwYXJhbSByZW5kZXJPZmZzZXRZIFZlcnRpY2FsIG9mZnNldCBmb3IgcmVuZGVyIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyZWVMZWFmTWFzdGVyUGllY2Uob2JqZWN0OiBhbnksIHJlbmRlck9mZnNldFg6IG51bWJlciwgcmVuZGVyT2Zmc2V0WTogbnVtYmVyKTogbWFzdGVyUGllY2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhbGV0dGU6IFtcIiMyMjg4MjJcIl0sXG4gICAgICAgIHBvc1g6IG9iamVjdC54IC0gcmVuZGVyT2Zmc2V0WCxcbiAgICAgICAgcG9zWTogb2JqZWN0LnkgLSByZW5kZXJPZmZzZXRZLFxuICAgICAgICB3aWR0aDogb2JqZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9iamVjdC5oZWlnaHQsXG4gICAgICAgIGZhY2luZzogb2JqZWN0LmZhY2luZyxcbiAgICAgICAgc3Ryb2tlczogW3tcbiAgICAgICAgICAgIGNlbGxYOiAtMixcbiAgICAgICAgICAgIGNlbGxZOiAtNCxcbiAgICAgICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGggKiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBvYmplY3QuaGVpZ2h0LFxuICAgICAgICAgICAgc3dhdGNoOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNlbGxYOiAwLFxuICAgICAgICAgICAgY2VsbFk6IC0xMCxcbiAgICAgICAgICAgIHdpZHRoOiA0LFxuICAgICAgICAgICAgaGVpZ2h0OiA3LFxuICAgICAgICAgICAgc3dhdGNoOiAwXG4gICAgICAgIH0sXSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEdldCBtYXN0ZXIgcGllY2UgZm9yIGdyYXZlc3RvbmUgb2JqZWN0XG4gKiBAcGFyYW0gb2JqZWN0IFRoZSBncmF2ZXN0b25lIG9iamVjdFxuICogQHBhcmFtIHJlbmRlck9mZnNldFggSG9yaXpvbnRhbCBvZmZzZXQgZm9yIHJlbmRlcmluZyBvYmplY3RzXG4gKiBAcGFyYW0gcmVuZGVyT2Zmc2V0WSBWZXJ0aWNhbCBvZmZzZXQgZm9yIHJlbmRlciBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncmF2ZVN0b25lTWFzdGVyUGllY2Uob2JqZWN0OiBhbnksIHJlbmRlck9mZnNldFg6IG51bWJlciwgcmVuZGVyT2Zmc2V0WTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFsZXR0ZTogW1wiIzg4ODg4OFwiXSxcbiAgICAgICAgcG9zWDogb2JqZWN0LnggLSByZW5kZXJPZmZzZXRYLFxuICAgICAgICBwb3NZOiBvYmplY3QueSAtIHJlbmRlck9mZnNldFksXG4gICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogb2JqZWN0LmhlaWdodCxcbiAgICAgICAgZmFjaW5nOiBvYmplY3QuZmFjaW5nLFxuICAgICAgICBzdHJva2VzOiBbe1xuICAgICAgICAgICAgY2VsbFg6IDAsXG4gICAgICAgICAgICBjZWxsWTogMSxcbiAgICAgICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzd2F0Y2g6IDAsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNlbGxYOiAxLFxuICAgICAgICAgICAgY2VsbFk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIGhlaWdodDogb2JqZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHN3YXRjaDogMCxcbiAgICAgICAgfV1cbiAgICB9XG59XG5cbi8qKlxuICogR2V0IG1hc3RlciBwaWVjZSBmb3IgYmFzaWMgcHJvamVjdGlsZVxuICogQHBhcmFtIG9iamVjdCBUaGUgcHJvamVjdGlsZSBvYmplY3RcbiAqIEBwYXJhbSByZW5kZXJPZmZzZXRYIEhvcml6b250YWwgb2Zmc2V0IGZvciByZW5kZXJpbmcgb2JqZWN0c1xuICogQHBhcmFtIHJlbmRlck9mZnNldFkgVmVydGljYWwgb2Zmc2V0IGZvciByZW5kZXIgb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlsZU1hc3RlclBpZWNlKG9iamVjdDogYW55LCByZW5kZXJPZmZzZXRYOiBudW1iZXIsIHJlbmRlck9mZnNldFk6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhbGV0dGU6IFtcIiNGRjY2NjZcIiwgXCIjNjZGRjY2XCIsIFwiIzY2NjZGRlwiLCBcIiNGRkZGNjZcIiwgXCIjRkY2NkZGXCIsIFwiIzY2RkZGRlwiXSxcbiAgICAgICAgcG9zWDogb2JqZWN0LnggLSByZW5kZXJPZmZzZXRYLFxuICAgICAgICBwb3NZOiBvYmplY3QueSAtIHJlbmRlck9mZnNldFksXG4gICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogb2JqZWN0LmhlaWdodCxcbiAgICAgICAgZmFjaW5nOiBvYmplY3QuZmFjaW5nLFxuICAgICAgICBzdHJva2VzOiBbe1xuICAgICAgICAgICAgY2VsbFg6IDAsXG4gICAgICAgICAgICBjZWxsWTogMCxcbiAgICAgICAgICAgIHdpZHRoOiBvYmplY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9iamVjdC5oZWlnaHQsXG4gICAgICAgICAgICBzd2F0Y2g6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXG4gICAgICAgIH1dXG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBtYXN0ZXJQaWVjZSB7XG4gICAgcGFsZXR0ZTogc3RyaW5nW10sXG4gICAgcG9zWDogbnVtYmVyLFxuICAgIHBvc1k6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGZhY2luZzogbnVtYmVyLFxuICAgIHN0cm9rZXM6IHN0cm9rZVtdLFxuICAgIGZyZWVIYW5kPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBzdHJva2Uge1xuICAgIGNlbGxYOiBudW1iZXIsXG4gICAgY2VsbFk6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHN3YXRjaDogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIG1vdXNlUG9zaXRpb24ge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgb3V0T2ZCb3VuZHM6IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBjbGFzcyBQb3BvdmEge1xuXG4gICAgcHJpdmF0ZSBjYW52YXM6IGFueTtcbiAgICBwcml2YXRlIGN0eDogYW55O1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3ViZVNpemU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBQb3BvdmEncyBjYW52YXNcbiAgICAgKiBAcGFyYW0gY2FudmFzSWQgSWQgb2YgaHRtbCBjYW52YXMgZWxlbWVudFxuICAgICAqIEBwYXJhbSBjdWJlU2l6ZSBSZW5kZXIgc2l6ZSBmb3IgZWFjaCBjdWJlIHdoZW4gZHJhd2luZyB3aXRoIGN1YmVzXG4gICAgICovXG4gICAgaW5pdChjYW52YXNJZDogc3RyaW5nLCBjdWJlU2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gPGFueT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuICAgICAgICB0aGlzLmN1YmVTaXplID0gY3ViZVNpemU7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBncmlkIG9uIHRoZSBjYW52YXNcbiAgICAgKiBAcGFyYW0gc3BhY2luZyBOdW1iZXIgb2YgcGl4ZWxzIGJldHdlZW4gZ3JpZCBsaW5lc1xuICAgICovXG4gICAgZHJhd0dyaWQoc3BhY2luZzogbnVtYmVyLCBvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIC8vIERyYXcgZ3JpZCBvbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjZDBkMGQwXCI7XG4gICAgICAgIGZvciAodmFyIHggPSAoISFvZmZzZXRYKSA/IG9mZnNldFggJSBzcGFjaW5nIDogMDsgeCA8PSB0aGlzLndpZHRoOyB4ICs9IHNwYWNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB5ID0gKCEhb2Zmc2V0WSkgPyBvZmZzZXRZICUgc3BhY2luZyA6IDA7IHkgPD0gdGhpcy5oZWlnaHQ7IHkgKz0gc3BhY2luZykge1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDAsIHkpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMud2lkdGgsIHkpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYSBtYXN0ZXJwaWVjZSB0byB0aGUgY2FudmFzXG4gICAgICogQHBhcmFtIG1hc3RlclBpZWNlIERlZmluaXRpb24gZm9yIHdoYXQgdG8gZHJhd1xuICAgICAqL1xuICAgIGRyYXcobWFzdGVyUGllY2U6IG1hc3RlclBpZWNlKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcblxuICAgICAgICB0aGlzLnByZXBDYW52YXMoXG4gICAgICAgICAgICBtYXN0ZXJQaWVjZS5wb3NYLFxuICAgICAgICAgICAgbWFzdGVyUGllY2UucG9zWSxcbiAgICAgICAgICAgIG1hc3RlclBpZWNlLndpZHRoLFxuICAgICAgICAgICAgbWFzdGVyUGllY2UuaGVpZ2h0LFxuICAgICAgICAgICAgbWFzdGVyUGllY2UuZmFjaW5nLFxuICAgICAgICAgICAgbWFzdGVyUGllY2UuZnJlZUhhbmQpO1xuICAgICAgICBtYXN0ZXJQaWVjZS5zdHJva2VzLmZvckVhY2goKHN0cm9rZTogc3Ryb2tlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN0cm9rZShzdHJva2UsIG1hc3RlclBpZWNlLnBhbGV0dGUsIG1hc3RlclBpZWNlLmZyZWVIYW5kKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENlbnRlcnMgdGhlIGNhbnZhcyBvbiBwb3NpdGlvbiwgYW5kIHJvdGF0ZXMgdG8gYSBjZXJ0YWluIGZhY2luZ1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblggVGhlIHggcG9zaXRpb24gb2Ygd2hhdCBpcyBiZWluZyBkcmF3blxuICAgICAqIEBwYXJhbSBwb3NpdGlvblkgVGhlIHkgcG9zaXRpb24gb2Ygd2hhdCBpcyBiZWluZyBkcmF3blxuICAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggb2Ygd2hhdCBpcyBiZWluZyBkcmF3blxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB3aGF0IGlzIGJlaW5nIGRyYXduXG4gICAgICogQHBhcmFtIGRlZ3JlZXMgRGVncmVlcyB0byByb3RhdGUgdGhlIGNhbnZhcyBieVxuICAgICAqIEBwYXJhbSBmcmVlSGFuZCBJZiB0aGUgc3Ryb2tlIGlzIHJlbmRlcmVkIHdpdGggYmxvY2tzIG9yIGZyZWUgaGFuZFxuICAgICAqL1xuICAgIHByZXBDYW52YXMocG9zaXRpb25YOiBudW1iZXIsIHBvc2l0aW9uWTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGVncmVlczogbnVtYmVyLCBmcmVlSGFuZD86IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHBvc2l0aW9uWCwgcG9zaXRpb25ZKTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgaWYgKGZyZWVIYW5kKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSB3aWR0aCAvIDIsIC0gaGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSB3aWR0aCAqIHRoaXMuY3ViZVNpemUgLyAyLCAtIGhlaWdodCAqIHRoaXMuY3ViZVNpemUgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgXG4gICAgICogQHBhcmFtIHN0cm9rZSBTdHJva2UgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIHBhbGV0dGUgQ29udGFpbnMgdGhlIG1hc3RlciBwaWVjZSdzIGNvbG9yIHN3YXRjaGVzXG4gICAgICogQHBhcmFtIGZyZWVIYW5kIElmIHRoZSBzdHJva2UgaXMgcmVuZGVyZWQgd2l0aCBibG9ja3Mgb3IgZnJlZSBoYW5kXG4gICAgICovXG4gICAgcmVuZGVyU3Ryb2tlKHN0cm9rZTogc3Ryb2tlLCBwYWxldHRlOiBzdHJpbmdbXSwgZnJlZUhhbmQ/OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcGFsZXR0ZVtzdHJva2Uuc3dhdGNoXTtcbiAgICAgICAgaWYgKGZyZWVIYW5kKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHN0cm9rZS5jZWxsWCwgc3Ryb2tlLmNlbGxZLFxuICAgICAgICAgICAgICAgIHN0cm9rZS53aWR0aCwgc3Ryb2tlLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChzdHJva2UuY2VsbFggKiB0aGlzLmN1YmVTaXplLCBzdHJva2UuY2VsbFkgKiB0aGlzLmN1YmVTaXplLFxuICAgICAgICAgICAgICAgIHN0cm9rZS53aWR0aCAqIHRoaXMuY3ViZVNpemUsIHN0cm9rZS5oZWlnaHQgKiB0aGlzLmN1YmVTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcmFzZXMgZXZlcnl0aGluZyBvbiB0aGUgY2FudmFzXG4gICAgICovXG4gICAgd2lwZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYW52YXMnIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgKi9cbiAgICBzaXplKCk6IHt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn0ge1xuICAgICAgICByZXR1cm4geyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLiBoZWlnaHQgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFBvcG92YSdzIGN1YmUgcmVuZGVyIHNpemVcbiAgICAgKi9cbiAgICBnZXRDdWJlU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdWJlU2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIFBvcG92YSdzIGN1YmUgcmVuZGVyIHNpemVcbiAgICAgKiBAcGFyYW0gc2l6ZSBWYWx1ZSBmb3IgY3ViZSByZW5kZXIgc2l6ZVxuICAgICAqL1xuICAgIHNldEN1YmVTaXplKHNpemU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmN1YmVTaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1vdXNlIHBvc2l0aW9uIGFuZCBpZiBtb3VzZSBpcyBpbnNpZGUgY2FudmFzXG4gICAgICogQHBhcmFtIGV2dCBNb3VzZSBtb3ZlbWVudCBldmVudCwgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIGdldE1vdXNlUG9zKGV2dDogYW55KTogbW91c2VQb3NpdGlvbiB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBwb3NYID0gZXZ0LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIHZhciBwb3NZID0gZXZ0LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgdmFyIG9mZkNhbnZhcyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChwb3NYIDwgMCkge1xuICAgICAgICAgICAgcG9zWCA9IDA7XG4gICAgICAgICAgICBvZmZDYW52YXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NZIDwgMCkge1xuICAgICAgICAgICAgcG9zWSA9IDA7XG4gICAgICAgICAgICBvZmZDYW52YXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NYID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgcG9zWCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICBvZmZDYW52YXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NZID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc1kgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIG9mZkNhbnZhcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHBvc1gsXG4gICAgICAgICAgeTogcG9zWSxcbiAgICAgICAgICBvdXRPZkJvdW5kczogb2ZmQ2FudmFzLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgc29ja2V0SW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCB7IFBvcG92YSwgbW91c2VQb3NpdGlvbiwgbWFzdGVyUGllY2UgfSBmcm9tIFwiLi9Qb3BvdmEvUG9wb3ZhXCI7XG5pbXBvcnQgKiBhcyBsb3V2cmUgZnJvbSBcIi4vTG91dnJlL0xvdXZyZVwiO1xuXG4vLyBTb2NrZXQgbGlzdGVuZXJcbnZhciBzb2NrZXQgPSBpbygpO1xuXG52YXIgY3ViZVNpemU6IG51bWJlcjtcbnZhciBncmlkU2l6ZTogbnVtYmVyID0gNDg7XG52YXIgdmlld1JhbmdlID0gMSAvIDI7XG5cbnZhciBwbGF5ZXJJZDogc3RyaW5nO1xuXG52YXIgcmVuZGVyT2Zmc2V0WDogbnVtYmVyO1xudmFyIHJlbmRlck9mZnNldFk6IG51bWJlcjtcblxudmFyIG1vdXNlUG9zOiBtb3VzZVBvc2l0aW9uO1xuXG52YXIgcGxheWVySW5wdXQgPSB7XG4gICAgdXA6IGZhbHNlLFxuICAgIGRvd246IGZhbHNlLFxuICAgIGxlZnQ6IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgICBidWlsZDogZmFsc2UsXG59XG5tb3VzZVBvcyA9IHsgeDogMCwgeTogMCwgb3V0T2ZCb3VuZHM6IHRydWUgfTtcblxuXG4vLyBBZGQgbGlzdGVuZXJzIHRvIGRvY3VtZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA2NTogLy8gQVxuICAgICAgICAgICAgcGxheWVySW5wdXQubGVmdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NzogLy8gV1xuICAgICAgICAgICAgcGxheWVySW5wdXQudXAgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjg6IC8vIERcbiAgICAgICAgICAgIHBsYXllcklucHV0LnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDgzOiAvLyBTXG4gICAgICAgICAgICBwbGF5ZXJJbnB1dC5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDY1OiAvLyBBXG4gICAgICAgICAgICBwbGF5ZXJJbnB1dC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4NzogLy8gV1xuICAgICAgICAgICAgcGxheWVySW5wdXQudXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY4OiAvLyBEXG4gICAgICAgICAgICBwbGF5ZXJJbnB1dC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODM6IC8vIFNcbiAgICAgICAgICAgIHBsYXllcklucHV0LmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogYW55KSB7XG4gICAgbW91c2VQb3MgPSBmb3JlZ3JvdW5kLmdldE1vdXNlUG9zKGV2ZW50KTtcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIG9uTW91c2VDbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKCFtb3VzZVBvcy5vdXRPZkJvdW5kcykge1xuICAgICAgICBzb2NrZXQuZW1pdChcIm1vdXNlRG93blwiLCB7XG4gICAgICAgICAgICBzb3VyY2VJZDogcGxheWVySWQsXG4gICAgICAgICAgICB0YXJnZXRYOiAobW91c2VQb3MueCArIHJlbmRlck9mZnNldFgpLFxuICAgICAgICAgICAgdGFyZ2V0WTogKG1vdXNlUG9zLnkgKyByZW5kZXJPZmZzZXRZKSB9KTtcbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uTW91c2VDbGljaywgZmFsc2UpO1xuXG4vLyBJbml0IGNhbnZhc1xudmFyIGJhY2tncm91bmQgID0gbmV3IFBvcG92YSgpO1xudmFyIGVudiAgICAgICAgID0gbmV3IFBvcG92YSgpO1xudmFyIGZvcmVncm91bmQgID0gbmV3IFBvcG92YSgpO1xudmFyIGNvdmVyICAgICAgID0gbmV3IFBvcG92YSgpO1xuXG5iYWNrZ3JvdW5kLmluaXQoXCJiYWNrZ3JvdW5kXCIsIGN1YmVTaXplKTtcbmVudi5pbml0KFwiZW52XCIsIGN1YmVTaXplKTtcbmZvcmVncm91bmQuaW5pdChcImZvcmVncm91bmRcIiwgY3ViZVNpemUpO1xuY292ZXIuaW5pdChcImNvdmVyXCIsIGN1YmVTaXplKTtcblxuLy8gQnJvYWRjYXN0IHBsYXllciBpbnB1dFxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KFwicGxheWVySW5wdXRcIiwgcGxheWVySW5wdXQpO1xufSwgMTAwMC82MCk7XG5cbi8vIFRlbGwgdGhlIHNlcnZlciBhIG5ldyBwbGF5ZXIgaGFzIGpvaW5lZCBhbmQgaGFuZHNoYWtlXG5zb2NrZXQuZW1pdChcIm5ldy1wbGF5ZXJcIik7XG5zb2NrZXQub24oXCJoYW5kc2hha2VcIiwgKGluZm86IGFueSkgPT4ge1xuICAgIHBsYXllcklkID0gaW5mby5pZDtcbiAgICBjdWJlU2l6ZSA9IGluZm8uY3ViZVNpemU7XG4gICAgYmFja2dyb3VuZC5zZXRDdWJlU2l6ZShjdWJlU2l6ZSk7XG4gICAgZW52LnNldEN1YmVTaXplKGN1YmVTaXplKTtcbiAgICBmb3JlZ3JvdW5kLnNldEN1YmVTaXplKGN1YmVTaXplKTtcbiAgICBjb3Zlci5zZXRDdWJlU2l6ZShjdWJlU2l6ZSk7XG59KTtcblxuLy8gSW50ZXJwcmV0IHN0YXRlIGFuZCBkcmF3IG9iamVjdHNcbnNvY2tldC5vbihcInN0YXRlXCIsIChvYmplY3RzOiBhbnkpID0+IHtcbiAgICBmb3JlZ3JvdW5kLndpcGVDYW52YXMoKTtcbiAgICBlbnYud2lwZUNhbnZhcygpO1xuICAgIGNvdmVyLndpcGVDYW52YXMoKTtcbiAgICB2YXIgY2FudmFzU2l6ZSA9IGZvcmVncm91bmQuc2l6ZSgpO1xuXG4gICAgLy8gVE9ETzogQWRkIHNtb290aGluZyB0byBjYW1lcmEgbW92ZW1lbnRcbiAgICByZW5kZXJPZmZzZXRYID0gKCEhcGxheWVySWQpXG4gICAgICAgID8gb2JqZWN0c1twbGF5ZXJJZF0ueCArIChtb3VzZVBvcy54IC0gKGNhbnZhc1NpemUud2lkdGggLyAyKSkgKiB2aWV3UmFuZ2UgLSBjYW52YXNTaXplLndpZHRoIC8gMlxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZW5kZXJPZmZzZXRZID0gKCEhcGxheWVySWQpXG4gICAgICAgID8gb2JqZWN0c1twbGF5ZXJJZF0ueSArIChtb3VzZVBvcy55IC0gKGNhbnZhc1NpemUuaGVpZ2h0IC8gMikpICogdmlld1JhbmdlIC0gY2FudmFzU2l6ZS5oZWlnaHQgLyAyXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gVE9ETzogRG9uJ3Qgd2lwZSBiYWNrZ3JvdW5kIGNhbnZhcywgdHJhbnNsYXRlIGl0IHRvIG1hdGNoIHBsYXllciBwb3NpdGlvblxuICAgIGlmICghIW9iamVjdHMpIHtcbiAgICAgICAgYmFja2dyb3VuZC53aXBlQ2FudmFzKCk7XG4gICAgICAgIGJhY2tncm91bmQuZHJhd0dyaWQoZ3JpZFNpemUsIC1yZW5kZXJPZmZzZXRYLCAtcmVuZGVyT2Zmc2V0WSk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpZCBpbiBvYmplY3RzKXtcbiAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaWRdO1xuXG4gICAgICAgIHN3aXRjaCAob2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwbGF5ZXJcIjpcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kLmRyYXcobG91dnJlLnBsYXllck1hc3RlclBpZWNlKG9iamVjdCwgcmVuZGVyT2Zmc2V0WCwgcmVuZGVyT2Zmc2V0WSkpO1xuICAgICAgICAgICAgICAgIGZvcmVncm91bmQuZHJhdyhsb3V2cmUuaGVhbHRoQmFyTWFzdGVyUGllY2Uob2JqZWN0LCByZW5kZXJPZmZzZXRYLCByZW5kZXJPZmZzZXRZLCBjdWJlU2l6ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2plY3RpbGVcIjpcbiAgICAgICAgICAgICAgICBlbnYuZHJhdyhsb3V2cmUucHJvamVjdGlsZU1hc3RlclBpZWNlKG9iamVjdCwgcmVuZGVyT2Zmc2V0WCwgcmVuZGVyT2Zmc2V0WSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdyYXZlc3RvbmVcIjpcbiAgICAgICAgICAgICAgICBlbnYuZHJhdyhsb3V2cmUuZ3JhdmVTdG9uZU1hc3RlclBpZWNlKG9iamVjdCwgcmVuZGVyT2Zmc2V0WCwgcmVuZGVyT2Zmc2V0WSkpO1xuICAgICAgICAgICAgICAgIGVudi5kcmF3KGxvdXZyZS5oZWFsdGhCYXJNYXN0ZXJQaWVjZShvYmplY3QsIHJlbmRlck9mZnNldFgsIHJlbmRlck9mZnNldFksIGN1YmVTaXplKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGVycmFpblwiOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0LnN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyZWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudi5kcmF3KGxvdXZyZS50cmVlVHJ1bmtNYXN0ZXJQaWVjZShvYmplY3QsIHJlbmRlck9mZnNldFgsIHJlbmRlck9mZnNldFkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyLmRyYXcobG91dnJlLnRyZWVMZWFmTWFzdGVyUGllY2Uob2JqZWN0LCByZW5kZXJPZmZzZXRYLCByZW5kZXJPZmZzZXRZKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9