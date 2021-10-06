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

    async getTotalFees() {
        let totalFees = 0;
        for (let i = 0; i < this.rentals.length; i++) {
            const fee = await this.rentals[i].getFees();
            totalFees += fee; 
        }
        return `Customer ${this.name}'s total fees is ${totalFees}`;
    }

    async getDetailedFees() {
        const output = [];

        for (let i = 0; i < this.rentals.length; i++) {
            const fee = await this.rentals[i].getFees();
            output.push(`Fees for Rental Number ${i + 1} is ${fee}`);
        }

        return output;
    }
}
