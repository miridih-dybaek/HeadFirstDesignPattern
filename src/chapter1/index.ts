import { FlyRocketPowered } from "./FlyRocketPowered";
import { FlyWithWings } from "./FlyWithWings";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { Quack } from "./Quack";

const MiniDuckSimulator = () => {
    const [flyBehavior, quackBehavior] = [new FlyWithWings(), new Quack()];
    const mallard = new MallardDuck(flyBehavior, quackBehavior);

    console.log('Mallard Duck은 다음과 같이 행동합니다.');
    mallard.performQuack();
    mallard.performFly();
    console.log('----------------------');
    const model = new ModelDuck();
    console.log('Model Duck은 다음과 같이 행동합니다.');
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
}

export const Chapter1 = () => {
    MiniDuckSimulator();
}