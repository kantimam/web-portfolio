import { randomInRange, randomFloatInRange } from './util'

export default class Orb {
    size: number;
    positionX: number;
    positionY: number;
    colorR: number;
    colorG: number;
    colorB: number;
    moveX: number;
    moveY: number;
    aX: number;
    aY: number;

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
        this.aX=0;
        this.aY=0;

    }

    updatePosition(): void {
        this.updateVelocity();
        this.positionX += this.moveX;
        this.positionY += this.moveY;
    }

    updateVelocity():void {
        this.moveX+=this.aX;
        this.moveY+=this.aY;
    }

    reflectX(){
        this.moveX*=-1;
    }

    reflectY(){
        this.moveY*=-1;
    }



    /* deflectMovementY(min: number, max: number): void {
        this.moveY = this.moveY > 0 ? randomInRange(min, max) : -1 * randomInRange(min, max)
    }

    deflectMovementX(min: number, max: number): void {
        this.moveX = this.moveX > 0 ? randomInRange(min, max) : -1 * randomInRange(min, max)
    } */

    deflectMovementY(min: number, max: number): void {
        this.moveY = this.moveY > 0 ? randomFloatInRange(min, max) : -1 * randomFloatInRange(min, max)
    }

    deflectMovementX(min: number, max: number): void {
        this.moveX = this.moveX > 0 ? randomFloatInRange(min, max) : -1 * randomFloatInRange(min, max)
    }

    shiftColor(min: number, max: number){
        this.colorR = (this.colorR + randomInRange(min, max)) % 255
        this.colorG = (this.colorG + randomInRange(min, max)) % 255
        this.colorB = (this.colorB + randomInRange(min, max)) % 255
    }
}