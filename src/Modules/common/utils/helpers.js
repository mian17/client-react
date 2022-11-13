export const userToken = JSON.parse(
  localStorage.getItem("personalAccessToken")
);

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
///////////////////////////////////
// SET SNACKBAR ALERT TO OPEN WHEN BOTH WHEN API CALLS ARE SUCCEED OR FAILED
export function setAlert(
  setSnackbarType,
  snackbarType,
  setOpenSnackbar,
  setAlertContent,
  alertContent
) {
  setSnackbarType(snackbarType);
  setOpenSnackbar(true);
  setAlertContent(alertContent);
}

///////////////////////////////////
// DEBOUNCE SEARCH AUTOCOMPLETE
export function searchAutoCompleteDebounce(keyword, fetchSearchResult) {
  if (keyword.length > 3) {
    const getData = setTimeout(fetchSearchResult, 2000);
    return () => clearTimeout(getData);
  }
}

///////////////////////////////////
//
