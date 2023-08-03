describe("calculateMonthlyPayment tests", () => {
  it("should calculate the monthly rate correctly", () => {
    const values = {
      amount: 10000,
      years: 3,
      rate: 3.7,
    };
    expect(calculateMonthlyPayment(values)).toEqual("293.91");
  });

  it("should return a result with 2 decimal places", () => {
    const values = {
      amount: 25000,
      years: 5,
      rate: 4.2,
    };

    const returnValue = calculateMonthlyPayment(values);
    expect(returnValue).toBeCloseTo("462.67", 2);
  });

  it("should handle negative interest rate", () => {
    const values = {
      amount: 5000,
      years: 2,
      rate: -2.5,
    };

    expect(calculateMonthlyPayment(values)).toBe("202.95");
  });

  it("should return amount divided by years when the interest rate is 0", () => {
    const values = {
      amount: 10000,
      years: 3,
      rate: 0,
    };

    expect(calculateMonthlyPayment(values)).toEqual("277.78");
  });

  it("should return the amount when years is 0", () => {
    const values = {
      amount: 10000,
      years: 0,
      rate: 3.7,
    };

    expect(calculateMonthlyPayment(values)).toEqual(10000);
  });
});
