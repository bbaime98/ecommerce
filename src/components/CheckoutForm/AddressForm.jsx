import React, {useState,useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField'

import { commerce } from '../../lib/commerce';

function AddressForm({checkoutToken}) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        console.log("@@@__+++TOKE", checkoutToken)
        const {countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        console.log("++++CONST___", countries)
        setShippingCountries(countries);
      };
    
      useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
      }, []);
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="First name" />
                    <FormInput required name="lastName" label="Last name" />
                    <FormInput required name="address1" label="Address line 1" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="city" label="City" />
                    <FormInput required name="zip" label="Zip / Postal code" />

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select fullWidth>
                            <MenuItem>
                            Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivisions</InputLabel>
                        <Select fullWidth>
                            <MenuItem>
                            Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select fullWidth>
                            <MenuItem>
                            Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    </Grid>
            </FormProvider>
        </>
    )
}

export default AddressForm
