function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeProduct
}) {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id)}>
          +
        </button>

        <button onClick={() => removeProduct(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;