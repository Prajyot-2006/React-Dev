import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  const addToCart = () => {
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  };

  if (!product) {
    return (
      <div className="details">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="details">
      <Link to="/">← Back to Home</Link>

      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <p>{product.description}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;