const ProductDetailsMoreInfo = (props) => {
  return (
    <div className="col-lg-12">
      <div className="product__details__tab">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="src/Modules/Product/ProductDetails/ProductDetailsMoreInfo/ProductDetailsMoreInfo.js"
              role="tab"
              aria-selected="true"
            >
              Mô tả
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="src/Modules/Product/ProductDetails/ProductDetailsMoreInfo/ProductDetailsMoreInfo.js"
              role="tab"
              aria-selected="false"
            >
              Thông tin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="src/Modules/Product/ProductDetails/ProductDetailsMoreInfo/ProductDetailsMoreInfo.js"
              role="tab"
              aria-selected="false"
            >
              Đánh giá <span>({props.reviewNum})</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tabs-1" role="tabpanel">
            <div className="product__details__tab__desc">
              <h6>Mô tả sản phẩm</h6>
              <p>
                {/*{props.productDescription}*/}
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
                tortor risus. Vivamus suscipit tortor eget felis porttitor
                volutpat. Vestibulum ac diam sit amet quam vehicula elementum
                sed sit amet dui. Donec rutrum congue leo eget malesuada.
                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur
                arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                sapien massa, convallis a pellentesque nec, egestas non nisi.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                risus.
              </p>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Cras ultricies ligula sed magna dictum porta. Cras ultricies
                ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris
                blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
                ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
                elementum sed sit amet dui. Proin eget tortor risus.
              </p>
            </div>
          </div>
          <div className="tab-pane" id="tabs-2" role="tabpanel">
            <div className="product__details__tab__desc">
              <h6>Thông tin sản phẩm</h6>
              {/*{props.productInfo}*/}
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Cras ultricies ligula sed magna dictum porta. Cras ultricies
                ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris
                blandit aliquet elit, eget tincidunt nibh pulvinar a.
              </p>
            </div>
          </div>
          <div className="tab-pane" id="tabs-3" role="tabpanel">
            <div className="product__details__tab__desc">
              <h6>Đánh giá sản phẩm</h6>
              {/*{props.productReview}*/}
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
                tortor risus. Vivamus suscipit tortor eget felis porttitor
                volutpat. Vestibulum ac diam sit amet quam vehicula elementum
                sed sit amet dui. Donec rutrum congue leo eget malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsMoreInfo;
