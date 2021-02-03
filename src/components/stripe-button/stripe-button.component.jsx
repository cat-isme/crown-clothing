import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IGXlUJpZQIySM0NAHqoc1Pl1PRCcOPFYjHHyywbqtYkYhDJXIDM0geZNIgUiwYIYX29UtJMf9EyjQBSD4lTeyGt00ZI7iTgQ1'
    
    const onToken = token => {console.log(token);alert('Payment successful')}
    return(
        <StripeCheckout
        label='Pay Now'
        name ='Crown clothing-Chloe'
        currency="EUR"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ${price} EUR`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton