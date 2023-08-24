import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../../components/item/item";
import StoreApi from "../../services/store-api";
import { useCart } from "../../context/cartAll";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  const {addToCart} = useCart();
  const searchQuery = query.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = searchQuery
        ? await StoreApi.fetchProductByQuery(searchQuery)
        : await StoreApi.fetchAllProducts();
      setProducts(products);
      setLoading(false);
      
    };
    fetchProducts().catch(console.error);
  }, [searchQuery]);

  if (!loading && searchQuery && !products.length) {
    return (
      <div className="container">
        <div className="product py-2">
          <div className="details p-3">
            No Products found! Please check the spelling or search any different
            query
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="products my-5">
        <div className="grid">
          {loading ? (
            <div className="loader"></div>
          ) : (
            products.map((product) => (
              <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
