import React, { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { STATUSES } from "../../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  // const [product, setProduct] = useState([]);
  const { data: product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>LOADING.....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>SOMETHING WENT WRONG!!!</h2>;
  } else {
    return (
      <div className="productsWrapper">
        {product.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Products;
