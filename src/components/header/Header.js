import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const cart = useSelector((state) => state.shop.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <section id="header">
      <div className="header">
        <div className="container">
          <div className="links-top flex space-a">
            <div className="box-1">
              <div className="social-media-links flex space-a">
                <button>Facebook</button>
                <button>Telegram</button>
                <button>Blog</button>
              </div>
            </div>
            <div className="box-2 flex space-a">
              <div className="login-bucket">
                <button>LogIn </button>
                {"/"}
                <button>
                  <Link to={`/cart/`}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartCount}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="navbar">
            <div className="flex space-b">
              <div className="box-1">Logo</div>
              <div className="box-2 text-center">
                <ul className="flex space-a">
                  <li>
                    <Link to={"/"}>
                      <button>Home</button>
                    </Link>
                  </li>
                  <li>
                    <button>Collection</button>
                  </li>
                  <li>
                    <button>About</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
