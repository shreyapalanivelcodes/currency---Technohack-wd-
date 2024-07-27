document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Mock conversion rates
    const rates = {
        'USD': { 'EUR': 0.93, 'GBP': 0.82, 'JPY': 145.0 },
        'EUR': { 'USD': 1.08, 'GBP': 0.88, 'JPY': 156.0 },
        'GBP': { 'USD': 1.22, 'EUR': 1.14, 'JPY': 177.0 },
        'JPY': { 'USD': 0.0069, 'EUR': 0.0064, 'GBP': 0.0056 }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted amount: ${amount}`;
        return;
    }

    const rate = rates[fromCurrency][toCurrency];
    if (!rate) {
        document.getElementById('result').innerText = 'Conversion rate not available.';
        return;
    }

    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `Converted amount: ${convertedAmount} ${toCurrency}`;
});
