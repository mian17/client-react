import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import {currencyFormatOptions} from "../../utils/utils";

export default function CheckoutCartItem(props) {
    return (
        <Box
            sx={{
                backgroundColor: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: 4,
                // overflowY: "auto",
                // minHeight: 240,
                // width: "80%",
                px: 1,
                mb: 2,
            }}
        >
            <Badge
                badgeContent={props.product && props.product.productQuantity}
                color="primary"
            >
                <Box
                    component="img"
                    src={props.product && props.product.productImgUrl}
                    alt=""
                    width="64px"
                    height="64px"
                    sx={{borderRadius: 2, border: "1px solid #bdb498"}}
                />
            </Badge>
            <Typography component="p" variant="subtitle1" sx={{flexGrow: 1}}>
                {props.product.productName}
            </Typography>
            <Typography component="p" variant="subtitle1">
                {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                    props.product.productPrice
                )}
            </Typography>
        </Box>
    );
}
