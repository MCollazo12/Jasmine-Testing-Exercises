// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let paymentId in allPayments) {
    let payment = allPayments[paymentId];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr, id) {
  let newTd = document.createElement('td');
  newTd.classList.add('deleteBtn');
  newTd.innerText = 'X';

  newTd.addEventListener('click', deleteServer)

  tr.append(newTd);
}

function deleteServer(event) {
  let server = event.target.closest('tr');
  delete allServers[server.id];

  server.parentNode.removeChild(server);
  updateServerTable();
}