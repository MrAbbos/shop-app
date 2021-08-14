import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";

export default function Cart() {
  const cart = useSelector((state) => state.shop.cart);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let item = 0;
    let price = 0;

    cart.forEach((element) => {
      item += element.quantity;
      price += element.quantity * element.price;
    });

    setTotalItems(item);
    setTotalPrice(price);
  }, [cart]);
  return (
    <section id="cart">
      <div className="savat container">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="total">
          Total items: {totalItems} <br /> Final price:{" "}
          {Math.round(totalPrice * 1000) / 1000} $
        </div>
      </div>
    </section>
  );
}
