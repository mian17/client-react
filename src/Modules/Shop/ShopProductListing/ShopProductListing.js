import Grid from "@mui/material/Grid";
import { favoriteProducts } from "../../Product/FavoriteProducts/favoriteProducts-test-data/favoriteProducts";
import * as PropTypes from "prop-types";

const ShopProductListing = (props) => {
  return (
    <Grid
      lg={props.filterIsClicked || props.sortIsClicked ? 10 : 12}
      component="section"
      container
      item
    >
      {favoriteProducts.map(props.callbackfn)}
    </Grid>
  );
};

ShopProductListing.propTypes = {
  filterIsClicked: PropTypes.bool,
  sortIsClicked: PropTypes.bool,
  callbackfn: PropTypes.func,
};
export default ShopProductListing;
