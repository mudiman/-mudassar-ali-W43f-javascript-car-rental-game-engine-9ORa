const { describe, test, expect } = global;
import { getCarFees } from '../../src/car-rental-bug-fixing/Utils';

describe('CRS-001', function () {
    test('If car 1 is rented, the value must be 70', async function () {
        let fee = await getCarFees(1);
        return expect(fee).toBe(70);
    });

});
