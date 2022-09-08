import classes from "./ThankYou.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ThankYou = () => {
    return (
        <Box sx={{textAlign: "center"}}>
            <Box component="header" className={classes["site-header"]}>
                <Typography
                    component="h1"
                    variant="h2"
                    fontFamily="Libre Bodoni"
                    className={classes["site-header__title"]}
                >
                    CẢM ƠN BẠN!
                </Typography>
            </Box>

            <div className={classes["main-content"]}>
                <i
                    className={`fa fa-check ${classes["main-content__checkmark"]}`}
                    id="checkmark"
                ></i>

                <p className={classes["main-content__body"]}>
                    Cảm ơn bạn đã đặt hàng tại Wieder_ Markt. Đơn hàng của bạn đã được
                    tiếp nhận và đang trong quá trình xử lý. Wieder_ Markt sẽ thông báo
                    đến quý khách ngay khi hàng chuẩn bị được giao.
                </p>
            </div>

            <footer className={classes["site-footer"]}>
                <p className={classes["site-footer__fineprint"]}>
                    Copyright ©2022, Wieder_ Markt | All Rights Reserved
                </p>
            </footer>
        </Box>
    );
};
export default ThankYou;
