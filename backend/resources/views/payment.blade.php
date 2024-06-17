<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
</head>
<body style="font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0;">
    <div style="text-align: center; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <img src="{{ asset('logo.png') }}" alt="Logo" style="max-width: 100%; height: auto; margin-bottom: 20px;">
        <form action="/checkout" method="POST" style="display: flex; justify-content: center; align-items: center;">
            <input type="hidden" name="_token" id="payment-method" value="{{csrf_token()}}">
            <input type="hidden" name="name" id="payment-method" value={{$name}} />
            <input type="hidden" name="amount" id="amount" value={{$amount}} />
            <button type="submit" style="padding: 12px 24px; background-color: #4CAF50; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: bold; text-transform: uppercase; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: background-color 0.3s; margin:15px 0">Procceed To Checkout</button>
        </form>
    </div>
</body>
</html>