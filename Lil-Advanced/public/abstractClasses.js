"use strict";
class TakePhotoo {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return 8;
    }
}
class Insta extends TakePhotoo {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
let bvp = new Insta("main", "vivid", 3);
console.log(bvp.getReelTime);
