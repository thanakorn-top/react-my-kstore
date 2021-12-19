import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import { uiAction } from "../../store/ui-slice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalQuantity)
  const clearCartHanler = () => {
    dispatch(cartActions.clearItemFromCart({}));
    cartToggle();
  };

  const cartToggle = () => {
    dispatch(uiAction.toggleCartVisible());
  };
  return (
    <Modal onClose={cartToggle}>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
        <div className={classes.actions}>
          {cartTotal!==0 && <button onClick={clearCartHanler}>Clear</button>}
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
