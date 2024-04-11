import { FlyWithWings } from "./FlyWithWings";
import { MallardDuck } from "./MallardDuck";
import { Quack } from "./Quack";

const MiniDuckSimulator = () => {
    const [flyBehavior, quackBehavior] = [new FlyWithWings(), new Quack()];
    const mallard = new MallardDuck(flyBehavior, quackBehavior);

    mallard.performQuack();
    mallard.performFly();
}

export const Chapter1 = () => {
    MiniDuckSimulator();
}