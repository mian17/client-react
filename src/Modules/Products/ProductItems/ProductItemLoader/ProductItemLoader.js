import { Skeleton } from "@mui/material";

const ProductItemLoader = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="product__item">
        <Skeleton
          className="product__item__pic"
          height={270}
          variant={"rectangular"}
        />
        <Skeleton className="product__item__text"></Skeleton>
        <Skeleton className="product__item__text"></Skeleton>
      </div>
    </div>
  );
};
export default ProductItemLoader;
