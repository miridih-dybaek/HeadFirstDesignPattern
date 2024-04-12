import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoway";
import { Quack } from "./Quack";

export class ModelDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Quack());
    }

    public display(): void {
        console.log('저는 모형 오리입니다.');
    }
}