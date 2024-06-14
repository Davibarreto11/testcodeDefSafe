import axios from "axios";

const apiCats = axios.create({
  baseURL: "https://meowfacts.herokuapp.com/",
});

export const getCatFact = async (lang = "por") => {
  try {
    const response = await apiCats.get("/", {
      // params: { lang },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter fato sobre gatos:", error);
    throw error;
  }
};
