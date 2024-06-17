import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const [total, setTotal] = useState(10);
    const navigate = useNavigate();

    const handlePayment  =(e) => {

      window.open(`http://127.0.0.1:8000/${total}`, "_blank");
    };

    return (
        <div>
            <h1>Checkout Page</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              
                <button onClick={handlePayment}>Pay</button>
            </form>
        </div>
    );
};

export default index;
