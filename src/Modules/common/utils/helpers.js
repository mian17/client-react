export const userToken = JSON.parse(
  localStorage.getItem("personalAccessToken")
);

export const tokenHeaderConfig = {
  headers: {
    Authorization: `Bearer ${userToken}`,
    Accept: "application/json",
  },
};
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
