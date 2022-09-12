import apiClient from "../../../../../../api";
import {backendServerPath} from "../../../../../common/utils/backendServerPath";

export default function fetchUserInfo(setUserState, setAvatarUrl) {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
        const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
        apiClient
            .get("api/user/account/profile", {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
            .then((response) => {
                const {
                    username,
                    name,
                    email,
                    phone_number: phoneNumber,
                    gender,
                    birth_date: birthDate,
                    address,
                    avatar,
                } = response.data.user;

                setUserState({
                    username,
                    name,
                    email,
                    phoneNumber,
                    gender,
                    birthDate,
                    address,
                });
                setAvatarUrl(backendServerPath + avatar);
            });
    });
}
