import * as Yup from "yup";
import { passwordRegex, phoneNumberRegex } from "../utils/regex";

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
export const profileSchema = Yup.object({
  username: Yup.string()
    .min(3, "Tên người dùng cần dài hơn 3 ký tự")
    .max(64, "Tên người dùng cần ngắn hơn 64 ký tự")
    .required("Không để trống tên đăng nhập"),
  name: Yup.string()
    .min(3, "Họ và tên cần dài hơn 3 ký tự")
    .max(64, "Họ và tên cần ngắn hơn 64 ký tự")
    .required("Không để trống họ và tên"),
  email: Yup.string()
    .email("Email không đúng định dạng")
    .min(3, "Email cần dài hơn 3 ký tự")
    .max(64, "Email cần ngắn hơn 64 ký tự")
    .required("Không để trống email"),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, "Số điện thoại không đúng định dạng")
    .min(10, "Số điện thoại cần dài hơn 10 ký tự")
    .required("Không để trống số điện thoại"),
  gender: Yup.number().required("Không để trống giới tính"),
  birthDate: Yup.date().required("Không để trống ngày sinh"),
  // avatar: Yup.string()
});

export const changePasswordSchema = Yup.object({
  oldPassword: Yup.string().required("Bạn cần nhập mật khẩu cũ của bạn"),
  newPassword: Yup.string()
    .min(8, "Mật khẩu mới của bạn cần dài hơn 8 ký tự.")
    .required("Bạn cần nhập mật khẩu mới")
    .matches(
      passwordRegex,
      "Mật khẩu của bạn cần dài hơn 8 ký tự, trong đó: có 1 chữ in hoa, 1 chữ thường, một số và một ký tự đặc biệt"
    ),
  reEnterNewPassword: Yup.string()
    .min(8, "Mật khẩu mới của bạn cần dài hơn 8 ký tự.")
    .required("Bạn cần nhập lại mật khẩu mới")
    .matches(
      passwordRegex,
      "Mật khẩu của bạn cần dài hơn 8 ký tự, trong đó: có 1 chữ in hoa, 1 chữ thường, một số và một ký tự đặc biệt"
    ),
});
