import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loder";
import ProductCard from "../Home/ProductCard";
import { getProduct } from "../../actions/productActions";
import { useParams } from "react-router-dom";
const Products = () => {
  const keyword = useParams();
  console.log("keyword...", keyword);
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => {
    return state.product;
  });
  console.log("product..", product.product);
  console.log("loading", loading);
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productHeading">Products</h2>
          <div className="products">
            {product.product &&
              product.product.map((product) => (
                <ProductCard product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
