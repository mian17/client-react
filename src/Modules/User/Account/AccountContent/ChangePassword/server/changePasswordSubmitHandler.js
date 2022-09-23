// import apiClient from "../../../../../../api";
// import ChangePasswordToServer from "../changePasswordUtils/ChangePasswordToServer";
//
// export default function changePasswordSubmitHandler(
//   setAlertContent,
//   setHasError,
//   setAlertState,
//   formik
// ) {
//   return (values) => {
//     const { oldPassword, newPassword, reEnterNewPassword } = values;
//
//     apiClient.get("/sanctum/csrf-cookie").then(() => {
//       const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
//       apiClient
//         .patch(
//           "api/user-change-password/",
//           new ChangePasswordToServer(
//             oldPassword,
//             newPassword,
//             reEnterNewPassword
//           ),
//           {
//             headers: {
//               Authorization: `Bearer ${userToken}`,
//             },
//           }
//         )
//         .then((response) => {
//           setAlertContent({
//             title: "Thành công",
//             message: response.data.message,
//           });
//           setHasError(false);
//         })
//         .catch((error) => {
//           setAlertContent({
//             title: "Có lỗi đã xảy ra",
//             message: error.response.data.message,
//           });
//           setHasError(true);
//         })
//         .then(() => {
//           setAlertState(true);
//         });
//     });
//
//     setAlertState(true);
//     formik.resetForm({
//       values: {
//         oldPassword: "",
//         newPassword: "",
//         reEnterNewPassword: "",
//       },
//     });
//   };
// }
