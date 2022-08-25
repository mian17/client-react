import { Skeleton } from "@mui/material";

const ProductItemLoader = () => {
  return (
    <>
      <Skeleton
        className="product__item__pic"
        height={270}
        variant={"rectangular"}
      />
      <Skeleton className="product__item__text"></Skeleton>
      <Skeleton className="product__item__text"></Skeleton>
    </>
  );
};
export default ProductItemLoader;
