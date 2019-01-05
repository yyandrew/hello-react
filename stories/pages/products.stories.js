import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductList from '../../src/components/ProductList'

storiesOf('Products page', module)
  .add('Products information', () => {
    const products = [{
      name: 'andrew',
      age: 31,
      address: 'shanghai'
    }]
    return  <ProductList products={products} />
  });
