import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";

export class MallardDuck extends Duck {
    constructor(flyBehavior: FlyWithWings, quackBehavior: Quack) {
        super(flyBehavior, quackBehavior);
    }

    public display(): void {
        console.log('I’m a real Mallard duck');
    }
}