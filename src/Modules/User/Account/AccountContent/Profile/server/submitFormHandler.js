import dayjs from "dayjs";
import apiClient from "../../../../../../api";
import ProfileToServer from "../profileUtils/ProfileToServer";

export default function submitFormHandler(
  setSnackbarType,
  setOpenSnackbar,
  setAlertContent,
  setHasUploaded,
  setIsLoadingProfile
) {
  return (values, { setSubmitting }) => {
    setIsLoadingProfile(true);
    const { username, name, email, phoneNumber, gender, birthDate, address } =
      values;
    const formattedBirthDate = dayjs(birthDate).format("YYYY-MM-DD");

    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));

      apiClient
        .patch(
          "api/user-update-info",
          new ProfileToServer(
            username,
            name,
            email,
            phoneNumber,
            gender,
            formattedBirthDate,
            address
          ),
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          setTimeout(() => {
            setIsLoadingProfile(false);
          }, 300);
          setSnackbarType("success");
          setOpenSnackbar(true);
          setAlertContent("Đổi thông tin người dùng thành công");
          setHasUploaded(true);
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => {
            setIsLoadingProfile(false);
          }, 300);
        });
      setSubmitting(false);
    });
  };
}
