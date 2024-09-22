const baseurl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:6724/api/"
    : "https://saviour-backend.loopretail.tngwebsolutions.com/api/";

export const ApiUrl = {
  BASE_URL: baseurl,
  IMAGE_BASE_URL: "https://storage.googleapis.com/saviour-visa/",
  DELETE_GOOGLE_IMAGE_URL: "/upload/delete?url=",
  UPLOAD_IMAGE_URL: "upload/files",
  LOGIN_URL: "auth/login",
  USER_ADD: "auth/user-register",
  GET_COUNTRY_LIST_URL: "country/get-all",
  ADD_ROLE_OPTION_URL: "role-options/add",
  GET_ROLE_OPTION_URL: "role-options/get",
  EDIT_ROLE_OPTION_URL: "role-options/edit/",
  ROLE_OPTION_URL: "role-options/get",
  ADD_ROLE_URL: "role/add",
  EDIT_ROLE_URL: "role/edit/",
  GET_ROLE_URL: "role/get",
  GET_ALL_USER: "user/get-all",
};
