export default class Customer {
    name;
    rentals;

    constructor(name, rentals = []) {
        this.name = name;
        this.rentals = rentals;
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    getTotalFees() {
        let totalFees = 0;
        for (let i = 0; i < this.rentals.length; i++) {
            totalFees += this.rentals[i].getFees();
        }

        return `Customer ${this.name}'s total fees is ${totalFees}`;
    }

    getDetailedFees() {
        const output = [];

        for (let i = 0; i < this.rentals.length; i++) {
            this.rentals[i].getFees().then((fee) => {
                output.push(`Fees for Rental Number ${i + 1} is ${fee}`);
            })
        }

        return output;
    }
}
