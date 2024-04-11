import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";

export abstract class Duck {
    private flyBehavior: FlyBehavior;
    private quackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    public setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }
    
    public swim(): void {
        console.log('All ducks float, even decoys!');
    }
}