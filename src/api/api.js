import axios from "axios";

export const getCropsByCategory = (category) => {
  try {
    const url = `${process.env.REACT_APP_BASEURL}/api/forecast?category=${category}`;

    const response = axios.get(url);
  } catch (error) {}
};
