import { Carousel } from "react-responsive-carousel";
import { bannerData } from "../constant/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Caurosol = () => {
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      autoPlay
      interval={3000}
      stopOnHover
      infinite={true}
    >

      
      {bannerData.map((item, index) => (
        <img key={index} src={item.url} alt={`Banner ${index}`} />
      ))}
    </Carousel>
  );
};
