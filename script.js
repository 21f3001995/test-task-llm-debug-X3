const rates = {"USD": 1, "EUR": 0.9, "JPY": 110};

function calculateTotalSales() {
    const salesA = parseFloat(document.getElementById('sales-A').innerText);
    const salesB = parseFloat(document.getElementById('sales-B').innerText);
    const salesC = parseFloat(document.getElementById('sales-C').innerText);
    const totalSalesUSD = salesA + salesB + salesC;
    const selectedCurrency = document.getElementById('currency').value;
    const conversionRate = rates[selectedCurrency];
    const totalSalesConverted = (totalSalesUSD * conversionRate).toFixed(2);
    document.getElementById('total-sales').innerText = totalSalesConverted;
    console.log('Conversion Rate:', conversionRate);
    console.log('Total Sales in ' + selectedCurrency + ':', totalSalesConverted);
}

document.getElementById('currency').addEventListener('change', calculateTotalSales);

// Initial calculation
calculateTotalSales();

// Load Markdown content
fetch('readme.md')
    .then(response => response.text())
    .then(text => {
        document.getElementById('markdown-output').innerText = text;
    });