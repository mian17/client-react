// React imports
import { useState } from "react";

// Source imports
import classes from "../Hero.module.css";
import { banners as bannersDumpData } from "./bannerSwiper-test-data/banners";

import ProductSlide from "../../Product/ProductSlide/ProductSlide";

//Swiper imports
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSwiper = () => {
  const [banners, setBanners] = useState(bannersDumpData);

  // Ready for API connection
  // const [error, setError] = useState(null);
  // const fetchBanners = useCallback(async () => {
  //   setError(null);
  //   try {
  //     // Get from api
  //     const response = await fetch("https://example.com");
  //     if (!response.ok) {
  //       throw new Error("Không lấy được dữ liệu");
  //     }
  //
  //     const data = await response.json();
  //     // console.log(data);
  //     const transformedBanners = data.map((bannerData) => {
  //       return new Banner();
  //     });
  //
  //       setBanners(transformedBanners);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //
  // }, []);

  // Request banners
  // useEffect(() => {
  //     fetchBanners();
  // }, [fetchBanners]);

  const paginationConfig = {
    clickable: true,
    type: "bullets",
    bulletActiveClass: `swiper-pagination-bullet-active ${classes["pagination-active"]}`,
    bulletClass: `swiper-pagination-bullet ${classes["pagination-normal"]}`,
  };
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      loop
      pagination={paginationConfig}
      grabCursor
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <ProductSlide
              imgUrl={banner.imgUrl}
              title={banner.title}
              subtitle={banner.subtitle}
              btnCTAContent={banner.btnCtaContent}
              link={banner.link}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default BannerSwiper;
