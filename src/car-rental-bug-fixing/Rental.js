import { getCarFees } from './Utils'

export default class Rental {
    cars;
    duration;

    constructor(cars, duration) {
        this.cars = cars;
        this.duration = duration;
    }

    async getFees() {
        let fees = 0;
        for (let i = 0; i < this.cars.length; i++) {
            let fee = await getCarFees(this.cars[i].id);
            fee *= this.duration;
            fees += fee;
        }

        return fees;
    }

}
