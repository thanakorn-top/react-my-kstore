import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import img1 from "../../assests/news1.jpg";
import img2 from "../../assests/news2.jpg";
import img3 from "../../assests/news3.jpg";
import img4 from "../../assests/news4.jpg";


const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "Black Mamba", description: "By Aespa" ,img:img1},
  { id: "p2", price: 2, title: "Eleven", description: "By I've" ,img:img2},
  { id: "p3", price: 1, title: "Vivace", description: "By LightSum",img:img3 },
  { id: "p4", price: 8, title: "Pirate", description: "By Everglow" ,img:img4},
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite single</h2>
      {/* <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </ul> */}

      <div>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
