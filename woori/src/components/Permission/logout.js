import Cookies from "js-cookie";

const logout = () => Cookies.remove("token");

export default logout;
