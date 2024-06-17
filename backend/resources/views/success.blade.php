<!-- resources/views/success.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .close-icon {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 20px;
            cursor: pointer;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Payment Successful!</h2>
        <p>Your payment has been successfully processed.</p>
        <p class="additional-text">You will receive a call once your product is ready for delivery.</p>
        <span class="close-icon" onclick="window.close();">&times;</span>
    </div>
</body>
</html>
