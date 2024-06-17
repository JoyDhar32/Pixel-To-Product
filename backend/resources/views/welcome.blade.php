<!DOCTYPE html>
<html>
<head>
    <title>Stripe Payment</title>
    <script src="https://js.stripe.com/v3/"></script>
</head>
<body>
    <h1>Stripe Payment Form</h1>

    <form id="payment-form">
        <div id="card-element"></div>
        <button type="submit" id="submit-button">Pay</button>
    </form>

    <div id="payment-result"></div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var stripe = Stripe('{{ $stripeKey }}');
            var elements = stripe.elements();
            var cardElement = elements.create('card');
            cardElement.mount('#card-element');

            var form = document.getElementById('payment-form');
            form.addEventListener('submit', async function(event) {
                event.preventDefault();

                const { paymentMethod, error } = await stripe.createPaymentMethod({
                    type: 'card',
                    card: cardElement,
                });

                if (error) {
                    document.getElementById('payment-result').textContent = error.message;
                } else {
                    fetch('/payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: JSON.stringify({
                            payment_method: paymentMethod.id,
                            amount: 1000, // Example amount in cents (e.g., $10.00)
                            currency: 'usd'
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            document.getElementById('payment-result').textContent = 'Payment successful!';
                        } else {
                            document.getElementById('payment-result').textContent = 'Payment failed: ' + data.error;
                        }
                    })
                    .catch(error => {
                        document.getElementById('payment-result').textContent = 'Payment error: ' + error.message;
                    });
                }
            });
        });
    </script>
</body>
</html>
