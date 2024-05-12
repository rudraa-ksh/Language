abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
    ){}

    abstract getSepia()

    getReelTime (): number {
        return 8;
    }
}




class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode, filter)
        this.burst = burst
    }
    getSepia() {
        console.log("Sepia")
    }
}

const Rudra = new Instagram("Focus","Normal",5)