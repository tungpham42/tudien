import axios from "axios";

export const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Word not found or an error occurred");
  }
};
