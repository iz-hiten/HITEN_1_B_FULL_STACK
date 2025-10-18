// File: script.js

let balance = 1000;

// Updates the displayed balance and clears input field
function updateUI() {
  document.getElementById('balance').textContent = `$${balance}`;
  document.getElementById('amount').value = '';
  document.getElementById('message').textContent = '';
}

// Handles deposit action
function deposit() {
  const amount = Number(document.getElementById('amount').value);
  
  if (amount > 0) {
    balance += amount;
    updateUI();
  } else {
    document.getElementById('message').textContent = 'Enter a valid amount to deposit!';
  }
}

// Handles withdrawal action
function withdraw() {
  const amount = Number(document.getElementById('amount').value);
  
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateUI();
  } else if (amount > balance) {
    document.getElementById('message').textContent = 'Insufficient balance!';
  } else {
    document.getElementById('message').textContent = 'Enter a valid amount to withdraw!';
  }
}
