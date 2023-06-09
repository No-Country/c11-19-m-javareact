import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ProductContact from "./ecoCreatorProfile/ProductContact";
import { useState, useEffect } from "react";
import { getProduct } from "../services/api/products/instances";
// import { register } from "swiper/element/bundle";
// register Swiper custom elements

// Import Swiper styles
// import 'swiper/swiper.min.css';
const Container = styled.div`
  user-select: none;
  -webkit-user-drag: none;
`;

export default ({ onOpen, onClicks }) => {
  const [globalProducts, setGlobalProducts] = useState([]);
  useEffect(() => {
    getProduct
      .get(
        "https://c11-19-m-javareact-production.up.railway.app/api/product/getAll"
      )
      .then((response) => setGlobalProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const responsive = {
    superLargeDesktop4: {
      breakpoint: { max: 2000, min: 1600 },
      items: 8,
    },
    superLargeDesktop3: {
      breakpoint: { max: 1600, min: 1300 },
      items: 7,
    },
    superLargeDesktop2: {
      breakpoint: { max: 1300, min: 990 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 990, min: 800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 800, min: 650 },
      items: 3,
    },
    mobile3: {
      breakpoint: { max: 650, min: 470 },
      items: 2.5,
    },
    mobile2: {
      breakpoint: { max: 470, min: 370 },
      items: 2,
    },
    mobile1: {
      breakpoint: { max: 370, min: 0 },
      items: 1.8,
    },
  };

  return (
    <Container>
      <Carousel responsive={responsive}>
        {globalProducts.map((productos, i) => (
          <div key={i}>
            <ProductContact
              datos={productos}
              onOpen={onOpen}
              onClicks={onClicks}
              id={productos.id}
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};
