import "./SingleProduct.css";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StoreApi from "../../services/store-api";

import { useCart } from "../../context/cartAll";

function SingleProduct() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const {addToCart} = useCart()
  const {productId} = useParams();

  useEffect(() => {
    const fetchonlyproduct = async () => {
      setLoading(true);
      const product = await StoreApi.fetchProductById(productId);
      setProduct(product);
      setLoading(false);
    };
    fetchonlyproduct().catch(console.error);
  }, [productId]);

  if (!loading && !product) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            Product Not Found.Please Visit{" "}
            <Link to="/" replace>
              Home
            </Link>{" "}
            to see all available products
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {loading? (
            <div className={"loader"}></div>
        ): (
            <div className="product py-2">
                <div className="details grid p-3">
                    <div className="product-image">
                        <img src={product.image} alt=""></img>
                    </div>
                    <div className="info">
                        <div className="description">
                            <h3>{product.title}</h3>
                            <p className="my-2">{product.description}</p>
                        </div>
                        <div className="flex">
                            <span className="price">${product.price}</span>
                            <span className="cart" onClick={()=>addToCart(product)}>
                                <img src="/cart.svg" alt=""></img>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )

        }
      </div>
    </>
  );
}

export default SingleProduct;
