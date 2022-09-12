import dayjs from "dayjs";
import apiClient from "../../../../../../api";
import ProfileToServer from "../profileUtils/ProfileToServer";

export default function submitFormHandler() {
  return (values) => {
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
        .then((response) => console.log(response));
    });
  };
}
