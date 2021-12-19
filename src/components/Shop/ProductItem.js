import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id, img } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemTocart({ id, title, price }));
  };

  return (
    <div className={classes.item}>
      <Card>
        <header>
          <img src={img} alt="1234" className={classes.newsImg}></img>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div>
          <div className={classes.desc}>
            <p>{description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </div>
    // <li className={classes.item}>
    //   <Card>
    //     <header>
    //       <img src={img} alt="1234" className={classes.newsImg}></img>
    //       <h3>{title}</h3>
    //       <div className={classes.price}>${price.toFixed(2)}</div>
    //     </header>

    //     <div >
    //       <div className={classes.desc}> <p>{description}</p></div>
    //       <div className={classes.actions}> <button onClick={addToCartHandler}>Add to Cart</button></div>
    //     </div>
    //   </Card>
    // </li>
  );
};

export default ProductItem;
