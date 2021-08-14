import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  adjustItemQuantity,
  removeFromCart,
} from "../../redux/shopping/actions";
import "./style.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, image, title, category, quantity, price } = item;

  const [input, setInput] = useState(quantity);

  function onChangeHandler(e) {
    setInput(e.target.value);
    dispatch(adjustItemQuantity(id, e.target.value));
  }

  
  return (
    <div className="savatComponent flex">
      <div className="savatImg flex">
        <img src={image} width="100px" height="100px"></img>
      </div>
      <div className="cart-right-box">
        <div className="box flex space-b column-920">
          <div className="box-1">
            {title}
            <br /> {category}
          </div>
          <div className="box-2">
            <div id="choosing" className="flex space-b column-473">
              <div className="numberOfGoods space-a flex">
                <label htmlFor="quantity">quantity: </label>{" "}
                <input
                  min="1"
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={input}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="a">
                <div>
                  {" "}
                  Subtotal price is:
                  {/* in order to avoid 0.1+0.2=0.30000000004 */}
                  <br /> {Math.round(input * price * 1000) / 1000} ${" "}
                </div>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(id))}
              className="btn btnAddCart"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
