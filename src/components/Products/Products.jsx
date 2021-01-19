import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {id: 1, name: "Shoes", description: "Running shoes", price: "20"},
  {id: 2, name: "Macbook", description: "Best laptop ever", price: "30"}
]
const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product  product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
