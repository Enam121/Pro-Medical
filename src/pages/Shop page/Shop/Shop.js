import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./shop-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="container my-5">
      <div className="row gy-5">

        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }

      </div>
    </div>
  );
};

export default Shop;