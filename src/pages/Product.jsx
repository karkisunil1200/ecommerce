import Announcement from "../components/Accouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { Container } from "./styles/productPage";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
