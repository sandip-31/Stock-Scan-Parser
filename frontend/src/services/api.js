import axios from "axios";


export const fetchDataFromAPI = () => {
  return axios.get("http://localhost:5000/api/stockdetails");
};
