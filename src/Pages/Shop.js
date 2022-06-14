import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";
import Sidebar from "../Modules/Sidebar/Sidebar";
import DiscountedProducts from "../Modules/Products/DiscountedProducts/DiscountedProducts";
import ProductItems from "../Modules/Products/ProductItems/ProductItems";
import ProductPagination from "../Modules/Products/ProductPagination/ProductPagination";

// TODO: FIX SMALL FLICKERING WHEN OPENING MUI'S SELECT WHILE ON FIREFOX
//       CHROME HAS NO ISSUE WITH THIS BUG

const Shop = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Cửa hàng Ogani"
        prevPages={["Trang chủ"]}
        curPage="Mua sắm"
      />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-7">
              {/*<DiscountedProducts />*/}

              <ProductItems />
              <ProductPagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
