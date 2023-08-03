beforeEach(() => {
  billAmtInput.value = '$100';
  tipAmtInput.value = '$20';
  submitPaymentInfo();
});

describe('sumPaymentTotal tests', () => {
    it('should sum the total for all bill amounts', () => {
        billAmtInput.value = '$275';
        submitPaymentInfo();
        expect(sumPaymentTotal(billAmt).toEqual('$375'));
    });

    it('should sum the total tip amount for all tips', () => {
        billAmtInput.value = '$15';
        submitPaymentInfo();
        expect(sumPaymentTotal(tipAmt).toEqual('$35'));
    });
}); 
    
describe('calculateTipPercent tests', () => {

});
