import { useState, useEffect, useMemo } from "react";

const UseStateHookExample = () => {

  const product = 'Samsung';
  const price = 3000;
  //const qty = 0;

  var [totalPrice, changePrice] = useState(0);

  // const changePrice = (q) => {
  //   calculate(price * q);
  // };

  useEffect(() => {
    console.log(`Total Price changed to ${totalPrice}`);
  });
  
  return (
    <div>
      <p>Product Name: <b>{product}</b></p>
      <p>Price: <b>{price}</b></p>
      <p>Quantity:
      <input type="text" onChange={(e) => changePrice(price * e.target.value)} placeholder="Enter Quantity" />
      </p>
      <p>Total Price: {totalPrice}</p>

      Seacrh Product:
      <input type="text"  placeholder="Seacrh Product" />

    </div>
  );
}

export default UseStateHookExample;