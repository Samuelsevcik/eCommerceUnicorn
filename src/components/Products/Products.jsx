import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', },
  { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alza.cz%2Fmacbook-air-13-retina-2018%3Fdq%3D5799270&psig=AOvVaw2Dulyeptspeo-_nz_atZbG&ust=1622018336312000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJC4s6i35PACFQAAAAAdAAAAABAO'},
];

const Products = () => {
  const classes = useStyles();

  return(
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
