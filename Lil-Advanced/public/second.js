"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, comments, likes) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.comments = comments;
        this.likes = likes;
    }
    createStory() {
        console.log("Story was created");
    }
}
