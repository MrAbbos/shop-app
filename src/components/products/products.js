import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import axios from "axios";
import Product from "./product";
import { setProducts } from "../../redux/shopping/actions";
import { useEffect } from "react";

export default function Products() {
  const dispatch = useDispatch();
  const fetchingProducts = async function () {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    if (response == undefined) {
      console.log(response);
    } else {
      dispatch(setProducts(response.data));
    }
  };

  useEffect(() => {
    fetchingProducts();
  }, []);
  const products = useSelector((state) => state.shop.products);
  return (
    <section id="cards">
      <div className="cards">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
