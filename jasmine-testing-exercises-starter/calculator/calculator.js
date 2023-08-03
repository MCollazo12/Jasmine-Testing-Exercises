window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 10000, years: 3, rate: 3.7 };
  const amountInput = document.querySelector("#loan-amount");
  amountInput.value = values.amount;

  const yearInput = document.querySelector("#loan-years");
  yearInput.value = values.years;

  const rateInput = document.querySelector("#loan-rate");
  rateInput.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentValues);

  updateMonthly(`$${monthlyPayment.toFixed(2)}`);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  return (values.amount * i) / (1 - (1 + i) ** -n);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.textContent = monthly;
}