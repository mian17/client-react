// // Imports from React
// // Imports from Swiper API (documentation link:https://swiperjs.com/react#installation=)
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
//
// import "swiper/css/bundle";
//
// // Imports from local data
// import cat_1 from "../../Assets/img/categories/cat-1.jpg";
// import cat_2 from "../../Assets/img/categories/cat-2.jpg";
// import cat_3 from "../../Assets/img/categories/cat-3.jpg";
// import cat_4 from "../../Assets/img/categories/cat-4.jpg";
// import cat_5 from "../../Assets/img/categories/cat-5.jpg";
//
// const categoriesBreakpointsOption = {
//     320: {
//         slidesPerView: 1,
//     },
//     375: {
//         slidesPerView: 1,
//     },
//     479: {
//         slidesPerView: 2,
//     },
//     576: {
//         slidesPerView: 2,
//     },
//     640: {
//         slidesPerView: 3,
//     },
//     768: {
//         slidesPerView: 3,
//     },
// };
//
// const Categories = () => {
//     return (
//         <section className="categories">
//             <div className="container">
//                 <div className="row">
//                     <Swiper
//                         breakpoints={categoriesBreakpointsOption}
//                         modules={[Navigation]}
//                         slidesPerView={4}
//                         navigation={true}
//                     >
//                         <SwiperSlide className="col-lg-3">
//                             <div
//                                 style={{
//                                     background: `url("${cat_1}") no-repeat center`,
//                                 }}
//                                 className="categories__item"
//                             >
//                                 <h5>
//                                     <a href="/">Trái cây tươi</a>
//                                 </h5>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide className="col-lg-3">
//                             <div
//                                 style={{
//                                     background: `url("${cat_2}") no-repeat center`,
//                                 }}
//                                 className="categories__item"
//                             >
//                                 <h5>
//                                     <a href="/">Trái cây sấy</a>
//                                 </h5>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide className="col-lg-3">
//                             <div
//                                 style={{
//                                     background: `url("${cat_3}") no-repeat center`,
//                                 }}
//                                 className="categories__item"
//                             >
//                                 <h5>
//                                     <a href="/">Rau củ</a>
//                                 </h5>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide className="col-lg-3">
//                             <div
//                                 style={{
//                                     background: `url("${cat_4}") no-repeat center`,
//                                 }}
//                                 className="categories__item"
//                             >
//                                 <h5>
//                                     <a href="/">Nước trái cây</a>
//                                 </h5>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide className="col-lg-3">
//                             <div
//                                 style={{
//                                     background: `url("${cat_5}") no-repeat center`,
//                                 }}
//                                 className="categories__item"
//                             >
//                                 <h5>
//                                     <a href="/">Thịt tươi</a>
//                                 </h5>
//                             </div>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default Categories;
