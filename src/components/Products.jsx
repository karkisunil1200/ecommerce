import { Container } from "./styles/productsComponents";

import { popularProducts } from "../data/data";
import Product from "./Product";

const Products = () => {
  return <div>{popularProducts.map((item) => console.log(item.id))}</div>;
};

export default Products;
