export abstract class Shape {
    
    protected A: number;

    constructor(a: number) {
        this.A = a;
    }

    public abstract GetArea() : number;
    public abstract GetCircumference() : number;
}
