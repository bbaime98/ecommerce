import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

import { commerce } from '../../../lib/commerce';

import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState('');

  const classes = useStyles()

  useEffect(() => {
    // if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log("CHECJOUT___TOKEN___", token)
          setCheckoutToken(token);
        } catch {
          // if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    // }
  }, [cart]);

  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken}/> : <PaymentForm />
  const Confirmation = () => <div>confirmation</div>
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
