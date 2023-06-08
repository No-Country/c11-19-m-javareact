// import { Swiper, SwiperSlide } from 'swiper/react';
import CardCatalog from "./CardCatalog";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { register } from "swiper/element/bundle";
// register Swiper custom elements

// Import Swiper styles
// import 'swiper/swiper.min.css';

export default () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 980 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 980, min: 650 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 650, min: 416 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 416, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <CardCatalog />
      </div>
      <div>
        <CardCatalog />
      </div>
      <div>
        <CardCatalog />
      </div>
      <div>
        <CardCatalog />
      </div>
      <div>
        <CardCatalog />
      </div>
    </Carousel>
  );
};
