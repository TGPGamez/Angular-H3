export abstract class Shape {
    public A: number;
    public B: number;

    protected constructor(a: number, b: number) {
        this.A = a;
        this.B = b;
    }

    public abstract GetArea() : number;
    public abstract GetCircumference() : number;
}
