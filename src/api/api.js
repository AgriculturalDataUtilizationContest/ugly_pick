import axios from "axios";

export const getCropsByCategory = async (category) => {
  try {
    console.log(category);
    const url = `${process.env.REACT_APP_BASE_URL}/api/forecast/${category}`;
    console.log(url);

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("ERROR : get crops by category", error);
    throw error;
  }
};
