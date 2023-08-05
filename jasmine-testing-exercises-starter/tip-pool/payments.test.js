describe('Payments Utilities test', () => {
  beforeEach(() => {
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
  });

  describe('submitPaymentInfo tests', () => {
    it('should add a new payment to allPayments', () => {
      //set all existing payments in 'allPayments' object equal to numberOfPayments
      const numberOfPayments = Object.keys(allPayments).length;
      expect(numberOfPayments).toEqual(1);

      expect(allPayments['payment' + paymentId].billAmt).toEqual('200');
      expect(allPayments['payment' + paymentId].tipAmt).toEqual('40');
      expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    });

    it('should add a new payment row tr to paymentTable tbody', () => {
      const paymentRows = document.querySelectorAll('#paymentTable tbody tr');
      expect(paymentRows.length).toEqual(1);

      //Submit new payment
      billAmtInput.value = '50';
      tipAmtInput.value = '10';
      submitPaymentInfo();

      const updatedPaymentRows = document.querySelectorAll('#paymentTable tbody tr');
      expect(updatedPaymentRows.length).toEqual(2); // Expecting two rows now
    });
  });

  describe('createCurPayment tests', () => {
    it('should create a new payment', () => {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';

      let newPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };

      expect(createCurPayment()).toEqual(newPayment);
    });

    it('should not create a new payment with empty input', () => {
      billAmtInput.value = '';
      tipAmtInput.value = '';

      expect(createCurPayment()).toEqual(undefined);
    });
  });

  describe('appendPaymentTable tests', () => {
    it('should append a new row to payment table with the provided payment data', () => {
      const paymentRows = document.querySelectorAll('#paymentTable tbody tr');
      expect(paymentRows.length).toEqual(1);

      const paymentRow = paymentRows[0];
      expect(paymentRow.children.length).toEqual(4);
      expect(paymentRow.children[0].innerText).toEqual('$200');
      expect(paymentRow.children[1].innerText).toEqual('$40');
      expect(paymentRow.children[2].innerText).toEqual('20%');
      expect(paymentRow.children[3].innerText).toEqual('X');
    });
  });

  describe('updateSumary tests', () => {
    it('should calculate the tipPercentAvg when there are multiple payments', () => {
      const payments = {
        payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
        payment2: { billAmt: '50', tipAmt: '5', tipPercent: 10 },
        payment3: { billAmt: '85', tipAmt: '15', tipPercent: 18 },
      };

      //Set allPayments equal to payments
      allPayments = payments;
      updateSummary();

      //Calculate the expected tip average
      const expectedTipAvg = (20 + 10 + 18) / 3;

      //Verify the table
      expect(summaryTds[0].innerHTML).toEqual('$235');
      expect(summaryTds[1].innerHTML).toEqual('$40');
      expect(summaryTds[2].innerHTML).toEqual(`${expectedTipAvg}%`);
    });
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.textContent = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
