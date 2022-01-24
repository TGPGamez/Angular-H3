import { Shape } from "./shape";

export class Square extends Shape {

    constructor(a: number) {
        super(a);
    }

    public GetArea(): number {
        return this.A * this.A;
    }
    public GetCircumference(): number {
        return this.A * 4;
    }
}
