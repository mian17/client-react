const currentFormatOptions = {
  style: "currency",
  currency: "VND",
};

const ProductItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          style={{
            background: `url("${props.imageUrl}") no-repeat center`,
            backgroundSize: "contain",
          }}
        >
          <ul className="product__item__pic__hover">
            <li>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <a href="/">{props.productName}</a>
          </h6>
          <h5>
            {new Intl.NumberFormat("vi-VN", currentFormatOptions).format(
              props.price
            )}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
