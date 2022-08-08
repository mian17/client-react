import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "./ProductDetails.module.css";
import product_details_1 from "../../../Assets/img/product/details/product-details-1.jpg";
import product_details_2 from "../../../Assets/img/product/details/product-details-2.jpg";
import product_details_3 from "../../../Assets/img/product/details/product-details-3.jpg";
import product_details_4 from "../../../Assets/img/product/details/product-details-4.jpg";
import product_details_5 from "../../../Assets/img/product/details/product-details-5.jpg";

import ProductDetailsMoreInfo from "./ProductDetailsMoreInfo/ProductDetailsMoreInfo";
import ProductDetailsBasicInfo from "./ProductDetailsBasicInfo/ProductDetailsBasicInfo";

// PRODUCT IMAGES
const product_details_images = [
  product_details_1,
  product_details_2,
  product_details_3,
  product_details_4,
  product_details_5,
];

const ProductDetails = (props) => {
  return (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
              <div className="product__details__pic__item">
                <img
                  className="product__details__pic__item--large"
                  src={product_details_1}
                  alt=""
                />
              </div>

              <div className="product__details__pic__slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  autoplay={{ delay: 4000 }}
                  speed={1000}
                  slidesPerView={4}
                  // navigation TODO: STYLE NAVIGATION, CHECK SWIPER DOCUMENTATION FOR MORE INFO https://swiperjs.com/react
                >
                  {product_details_images.map((image) => {
                    return (
                      <SwiperSlide>
                        <img
                          className={classes["product-details-swiperslide-pic"]}
                          src={image}
                          alt=""
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <ProductDetailsBasicInfo productName={props.productName} />
          </div>
          <ProductDetailsMoreInfo reviewNum={1} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
