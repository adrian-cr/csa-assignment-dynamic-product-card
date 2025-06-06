import React, { useState } from 'react'
import "./ProductCard.css"
export default function ProductCard({productDetails}) {
  const [discPrice, setDiscPrice] = useState("");
  const showDiscount = discPrice !== "";
  const handleDiscountToggle = () => {
    if (!showDiscount) setDiscPrice(productDetails.discPrice);
    else setDiscPrice("")
   }
  return (
    <div class="card-container">
      <div class="product-wrapper">
        <img class="product-image" src={productDetails.imageUrl} />
        <h4 class="product-name">{productDetails.name.toUpperCase()}</h4>
        <p class={`product-price ${showDiscount? "reduced" : ""}`}>$ {productDetails.price}</p>
        {showDiscount && <p class="product-price discounted">$ {productDetails.discPrice}</p>}
        <p class="product-description">{productDetails.description}</p>
        <button class="product-button" onClick={handleDiscountToggle}>{showDiscount? "Hide Discount" : "See Discount"}</button>
      </div>
    </div>
  )
}
/*
ProductCard Component

Description:
---------------
The ProductCard component is a reusable React component designed to display product information in a visually appealing card format. It accepts a single prop, `productDetails`, which contains the product's image, name, price, discounted price, and description.

Features:
---------------
-

Props:
---------------
- productDetails: {
  imageUrl: string,
  name: string,
  price: number | string,
  discPrice: number | string,
  description: string
  }

Usage:
---------------
<ProductCard productDetails={product} />
*/
