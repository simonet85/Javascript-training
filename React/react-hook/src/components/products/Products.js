import React from 'react';
import Product from './Product';

const Products = () => {
  const getProducts = () => {
    return [
      {
        imageUrl: 'http://loremflickr.com/150/150?random=1',
        productName: 'Product 1',
        releasedDate: 'May 31,2016',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.',
        rating: 1,
        numOfReviews: 2,
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=2',
        productName: 'Product 2',
        releasedDate: 'July 01,2017',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.',
        rating: 2,
        numOfReviews: 3,
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=3',
        productName: 'Product 3',
        releasedDate: 'Jan 31,2018',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.',
        rating: 3,
        numOfReviews: 7,
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=4',
        productName: 'Product 4',
        releasedDate: 'Feb 15,2019',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.',
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: 'http://loremflickr.com/150/150?random=5',
        productName: 'Product 5',
        releasedDate: 'Mar 15,2019',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.',
        rating: 5,
        numOfReviews: 12,
      },
    ];
  };
  const products = getProducts();
  const productList = products.map((product) => (
    <Product key='product.productName' data={product} />
  ));

  return (
    <div>
      {productList.length > 0 && <ul>{productList}</ul>}
      {productList.length === 0 && <ul>No product found!</ul>}
    </div>
  );
};
export default Products;
