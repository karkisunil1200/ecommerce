import { Container } from "./styles/productsComponents";

import { popularProducts } from "../data/data";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
