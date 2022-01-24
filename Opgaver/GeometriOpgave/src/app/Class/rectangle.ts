import { Shape } from "./shape";

export class Rectangle extends Shape {

    protected B: number;

    constructor(a: number, b: number) {
        super(a);
        this.B = b;
    }

    GetCircumference(): number {
        return 2 * (this.A + this.B);
    }

    GetArea(): number {
        return this.A * this.B;
    }
}
