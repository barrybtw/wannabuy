import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useWishlist } from "../stores/useWishlist";
const Home: NextPage = () => {
  let lol = useWishlist((state) => state);
  function add() {
    lol.addProduct({
      name: "test",
      price: 1,
    });
  }

  function get() {
    console.log(lol.products);
  }

  function rem(id: string) {
    lol.removeProduct(id);
  }

  return (
    <div className={styles.container}>
      What do you want to buy?
      <br />
      <button onClick={add}>Add product</button>
      <br />
      <button onClick={get}>Get products</button>
      <br />
      {lol.products.map((product) => (
        <div key={product.id}>
          <span>
            <hr />
            {product.name} - {product.price}
          </span>
          <button onClick={() => rem(product.id as string)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
