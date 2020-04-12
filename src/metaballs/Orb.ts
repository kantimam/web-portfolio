import { randomInRange } from './util'

export default class Orb {
    size: number;
    positionX: number;
    positionY: number;
    colorR: number;
    colorG: number;
    colorB: number;
    moveX: number;
    moveY: number;
    
    lastCollision: number=0;


    constructor(size: number, positionX: number, positionY: number, colorR: number, colorG: number, colorB: number, moveX: number, moveY: number) {
        this.size = size;
        this.positionX = positionX;
        this.positionY = positionY;
        this.moveX = moveX;
        this.moveY = moveY;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;


    }

    updatePosition(): void {
        this.positionX += this.moveX;
        this.positionY += this.moveY;
    }

    

    reflectX(){
        this.moveX*=-1;
    }

    reflectY(){
        this.moveY*=-1;
    }


    reflectTop(margin:number){
        /* this.moveY+=(Math.abs(this.moveY) / margin); */
        this.moveY+=0.1;
    }
    reflectRight(margin:number){
        this.moveX-=0.15;
    }
    reflectBottom(margin:number){
        this.moveY-=0.1;
    }
    reflectLeft(margin:number){
        this.moveX+=0.15;
    }

    deflectMovementY(min: number, max: number): void {
        this.moveY = this.moveY > 0 ? randomInRange(min, max) : -1 * randomInRange(min, max)
    }

    deflectMovementX(min: number, max: number): void {
        this.moveX = this.moveX > 0 ? randomInRange(min, max) : -1 * randomInRange(min, max)
    }

    shiftColor(min: number, max: number){
        this.colorR = (this.colorR + randomInRange(min, max)) % 255
        this.colorG = (this.colorG + randomInRange(min, max)) % 255
        this.colorB = (this.colorB + randomInRange(min, max)) % 255
    }
}