import axios from "axios";

const fetcher = (url) => axios.get(url).then((response) => response.data);

export default fetcher;
