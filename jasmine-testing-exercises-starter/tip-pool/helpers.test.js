describe('Helper utilities test', () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  describe('sumPaymentTotal tests', () => {
    it('should sum the total for all bill amounts', () => {
      billAmtInput.value = 50;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(150);
    });

    it('should sum the total amount for all tips', () => {
      billAmtInput.value = 75;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(35);
    });
  });

  describe('calculateTipPercent tests', () => {
    it('should calculate tip percent correctly ', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(57, 10)).toEqual(18);
      expect(calculateTipPercent(25, 4)).toEqual(16);
    });
  });

    describe('appendTd tests', () => {
        it('should append a new td to the summary table', () => {
            const tableRow = document.createElement('tr');
            appendTd(tableRow, '20');

            expect(tableRow.children.length).toBe(1);
            expect(tableRow.children[0].textContent).toEqual('20')
      })
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.textContent = '';
    allPayments = {};
    paymentId = 0;
  });
});
