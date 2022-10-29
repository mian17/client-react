import apiClient from "../../../../../../api";

export default function uploadAvatarHandler(e) {
  apiClient.get("/sanctum/csrf-cookie").then(() => {
    const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
    const avatarFormData = new FormData();
    avatarFormData.append("avatar_file", e.target.files[0]);
    apiClient
      .post("api/user-update-avatar", avatarFormData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  });
}
