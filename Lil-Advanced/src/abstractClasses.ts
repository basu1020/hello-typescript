abstract class TakePhotoo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
    abstract getSepia():void

    getReelTime(): number {
        return 8
    }
}

class Insta extends TakePhotoo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter, burst)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

let bvp = new Insta("main", "vivid", 3)
console.log(bvp.getReelTime)