import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {

  const products = [
    {
      name: "NIKE AIR JORDAN 1 ZM",
      description: "The NIKE AIR JORDAN 1 ZM is a classic high-top skate shoe featuring durable canvas and suede uppers, reinforced toe caps, padded collars for support and flexibility, and the signature rubber waffle outsole for superior grip.",
      price: 64.89,
      discPrice: 59.99,
      imageUrl: "https://rutzmx.com/cdn/shop/files/TenisnIKEAirjordan1zmairDV1307205Cafe_gris_morado_5612c4af-bdeb-44c5-a9a0-f21f3ac53418.heic?v=1712265184&width=1445"
    },
    {
      name: "ADIDAS ULTRABOOST 21",
      description: "Experience ultimate comfort and energy return with the ADIDAS ULTRABOOST 21, featuring a Primeknit upper and responsive Boost midsole.",
      price: 120.00,
      discPrice: 99.99,
      imageUrl: "https://runpedia.mx/wp-content/uploads/2023/01/adidas-ultraboost-21_runpedia.webp"
    },
    {
      name: "PUMA RS-X3",
      description: "The PUMA RS-X3 reinvents retro running style with bold colors, layered materials, and extra cushioning for all-day comfort.",
      price: 89.99,
      discPrice: 79.99,
      imageUrl: "https://scontent.fgdl17-1.fna.fbcdn.net/v/t1.6435-9/89592714_3350437288304800_8128687737571115008_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=FVefFZEkqBAQ7kNvwFStOvN&_nc_oc=AdnR6BvfDcEeyX5xiXEgKpxMlrWza6qX4Agopu7YYtaxQG8ZA2-Q4MCUjQ0Qab8471lNQQLkKES0dDTemi9KdxEe&_nc_zt=23&_nc_ht=scontent.fgdl17-1.fna&_nc_gid=jC9op5q3uoTee1vNIYNCdA&oh=00_AfNKsoCKy1pCnofocLD0oJ7CTXqNcU39zwL7uAycjQu3uA&oe=6869A5E7"
    },
    {
      name: "NEW BALANCE 574",
      description: "A timeless classic, the NEW BALANCE 574 combines suede and mesh for a versatile, everyday sneaker with ENCAP midsole cushioning.",
      price: 74.95,
      discPrice: 69.99,
      imageUrl: "https://images.asos-media.com/products/new-balance-574-trainers-in-black/201068493-1-black?$n_750w$&wid=750&hei=750&fit=crop"
    }
  ];

  return (
    <div className="App">
      {
        products.map(e => <ProductCard productDetails={e}></ProductCard>)
      }

    </div>
  );
}

export default App;
