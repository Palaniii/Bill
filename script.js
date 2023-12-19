function calculateTotal() {
    const totalElement = document.getElementById('total');
    let total = 0;

    // Sample item prices (adjust as needed)
    const prices = {
        carrots:5,
        apples: 20,
	bananas:30,
        tomatoes: 35,
	oranges: 70,
       
        // Add more items as needed
    };

    Object.keys(prices).forEach(item => {
        const quantity = document.getElementById(item).value;
        total += prices[item] * (quantity ? parseInt(quantity) : 0);
    });

    totalElement.textContent = `Total:$${total.toFixed(2)}`;
}

function processPayment() {
    const totalElement = document.getElementById('total');
    const totalAmount = parseFloat(totalElement.textContent.split('$')[1]);

    const paymentAmount = prompt('Enter the payment amount:');

    if (parseFloat(paymentAmount) >= totalAmount) {
        alert('Payment successful! Thank you.');
    } else {
        alert('Insufficient payment amount. Please try again.');
    }
}
