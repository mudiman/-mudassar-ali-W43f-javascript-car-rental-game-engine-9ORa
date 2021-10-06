const { describe, test, expect } = global;
import Car from '../../src/car-rental-bug-fixing/Car';
import Customer from '../../src/car-rental-bug-fixing/Customer';
import Rental from '../../src/car-rental-bug-fixing/Rental';

describe('CRS-002', function () {
    test('Test getTotalFees', async function () {
        let customer = new Customer("ali", [
            new Rental([new Car(1, "2012")], 100),
            new Rental([new Car(2, "2014")], 110),
            new Rental([new Car(3, "2016")], 130),
        ]);
        let totalFee = await customer.getTotalFees();
        
        return expect(totalFee).toBe("Customer ali's total fees is 34900");
    });

});
