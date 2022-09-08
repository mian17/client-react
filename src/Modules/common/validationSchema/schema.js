import * as Yup from "yup";
import {phoneNumberRegex} from "../utils/regex";

export const orderSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .min(2, "Tên của bạn cần dài hơn 2 ký tự.")
      .max(50, "Tên của bạn cần ít hơn 20 ký tự")
      .required("Vui lòng điền tên của người nhận."),
  email: Yup.string()
      .trim()
      .lowercase()
      .email("Email chưa phù hợp, bạn vui lòng kiểm tra lại.")
      .required("Bạn cần điền email mà bạn đang sử dụng."),
  phoneNumber: Yup.string()
      .matches(
          phoneNumberRegex,
          "Số điện thoại của người nhận không đúng định dạng"
      )
      .max(15, "Số điện thoại của người nhận dài quá")
      .required("Bạn cần điền số điện thoại người nhận"),
  address: Yup.string()
      .trim()
      .min(10, "Địa chỉ của bạn cần dài hơn 10 ký tự.")
      .max(100, "Họ của bạn cần ngắn hơn 100 ký tự.")
      .required("Bạn cần điền địa chỉ của người nhận."),
});
