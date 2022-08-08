const ProductItemList = () => {
  return (
    <div className="col-lg-11 mx-auto mb-4">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="media align-items-lg-center flex-column flex-lg-row">
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">
                Apple iPhone XR (Red, 128 GB)
              </h5>
              <p className="font-italic text-muted mb-0 small">
                128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP
                Front Camera A12 Bionic Chip Processor
              </p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">₹64,999</h6>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success"></i>
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-gray"></i>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="https://i.imgur.com/KFojDGa.jpg"
              width="200"
              className="ml-lg-5 order-1 order-lg-2"
              style={{ height: "170px", width: "140px" }}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ProductItemList;
