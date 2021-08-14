import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, loadCurrentItem } from "../../redux/shopping/actions";

export default function Product({ product }) {
  const { id, title, image, category, price } = product;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="img-card space-a flex">
        <img src={image} alt={title} />
      </div>
      {/* <Link to={`/product/${id}`}> */}
      <div className="flex content-card space-b">
        <div className="card-box-left">
          {title}
          <br />
          {category}
          <br />
          {price}
        </div>
        <div className="flex space-b card-box-right">
          <div className="icon">
            <FontAwesomeIcon
              //onClick={setAppr(false)}
              icon={farHeart}
              //style={{ display: appeareance ? "block" : "none" }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              //onClick={setAppr(true)}
              //style={{ display: appeareance ? "none" : "block" }}
            />
          </div>
          <div className="add-btn">
            <button
              onClick={() => {
                dispatch(addToCart(id));
              }}
              className="btn btnAddCart"
            >
              Add 1 to cart
            </button>
          </div>
          <Link to={`/products/${id}`}>
            <div className="more-btn">
              <button
                onClick={() => {
                  dispatch(loadCurrentItem(product));
                }}
                className="btn btnAddCart"
              >
                More...
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
