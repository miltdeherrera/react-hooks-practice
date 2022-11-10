import React, { useState, useEffect } from 'react';
import ProductDetails from "../ProductDetails";
import ProductListItem from "../ProductListItem";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  // const sideOpen = true;
const [sideOpen, setSideOpen] = useState(true);
const [selectedProduct, setSelectedProduct] = useState('');

useEffect(() => {
  console.log('Selected product change to', {selectedProduct});

}, [selectedProduct]);

useEffect(() => {
  console.log('Side open status changes, selected product goes away')
  setSelectedProduct('');
}, [sideOpen])

console.log('test to see if ProductView is called again')

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={item.id === selectedProduct.id}
              onClick={() => setSelectedProduct(item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails product={selectedProduct} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;