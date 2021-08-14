import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { addToCart } from "../../redux/shopping/actions";

export default function ProductDetailed() {
  const dispatch = useDispatch();
  const currenItem = useSelector((state) => state.shop.currenItem);
  const { id, image, title, price, description, quantity } = currenItem;

  const [input, setInput] = useState(quantity || 1);

  function OnChangeHandler(e) {
    setInput(e.target.value);
  }

  function addToCartf() {
    console.log(typeof input);
    dispatch(addToCart(id, parseInt(input)));
  }
  return (
    <>
      <section id="productDetailed">
        <div className="container">
          {Object.keys(currenItem).length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="detailed_card flex column-660">
              <div className="box-1">
                <img width="100%" src={image} alt={title} />
              </div>
              <div className="box-2">
                <h1>{title}</h1>
                <FontAwesomeIcon
                  id="faStar"
                  //onClick={setAppr(false)}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  id="faStar"
                  //onClick={setAppr(false)}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  id="faStar"
                  //onClick={setAppr(false)}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  id="faStar"
                  //onClick={setAppr(false)}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  id="faStar"
                  //onClick={setAppr(false)}
                  icon={faStar}
                />
                <span> 1 trillion reviews</span> <br />
                <span>
                  <p>{description}</p>
                </span>
                <div id="choosing" className="flex space-b">
                  <div className="numberOfGoods space-a flex">
                    <label htmlFor="quantity">quantity: </label>{" "}
                    <input
                      min="1"
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={input}
                      onChange={OnChangeHandler}
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
                <button onClick={addToCartf} className="btn btnAddCart">
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
