import { Add, RemoveCircleOutline } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../components/Accouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styles/productPage";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images6.alphacoders.com/319/319175.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Rock the World</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            tempora voluptatum similique ipsa iste quaerat eos explicabo id
            illum cupiditate vero, itaque temporibus possimus recusandae vel
            aliquid quo ab at accusantium. Et eos voluptatum id reiciendis
            cumque obcaecati modi beatae.
          </Desc>
          <Price>$ 10</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="tomato" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <AddIcon />
              <Amount>2</Amount>
              <RemoveIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
