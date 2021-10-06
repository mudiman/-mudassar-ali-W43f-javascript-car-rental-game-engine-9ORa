const { describe, test, expect } = global;
import Car from "../../src/car-rental-bug-fixing/Car";
import Customer from "../../src/car-rental-bug-fixing/Customer";
import Rental from "../../src/car-rental-bug-fixing/Rental";

describe("CRS-003", function () {
  test("Test getDetailedFees", async function () {
    let customer = new Customer("ali", [
      new Rental([new Car(1, "2012")], 100),
      new Rental([new Car(2, "2014")], 110),
      new Rental([new Car(3, "2016")], 130),
    ]);
    let totalFee = await customer.getDetailedFees();

    return expect(totalFee.toString()).toBe(
      [
        "Fees for Rental Number 1 is 7000",
        "Fees for Rental Number 2 is 11000",
        "Fees for Rental Number 3 is 16900",
      ].toString()
    );
  });
});
