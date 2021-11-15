import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Jw7RCCwKeaoed8SiMQWIdrYb7588nPn2hSmuU9ZtAuoGT0yMoQNyvna3L0y87lmnvAAw5nkfB6RDrJYz6lc2TsF006jdewRUr');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay:${appointment.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;