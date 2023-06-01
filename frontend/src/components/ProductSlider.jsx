// import { Swiper, SwiperSlide } from 'swiper/react';
import CardCatalog from "./CardCatalog";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// Import Swiper styles
// import 'swiper/swiper.min.css';

export default () => {
  return (
    <swiper-container
      slides-per-view="2"
      speed="500"
      loop="true"
      css-mode="true"
    >
      <swiper-slide>
        <CardCatalog />
      </swiper-slide>
      <swiper-slide>
        <CardCatalog />
      </swiper-slide>
      <swiper-slide>
        <CardCatalog />
      </swiper-slide>
    </swiper-container>
  );
};
