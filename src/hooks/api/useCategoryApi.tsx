import { get } from "@/utils/apiCaller";
import axios from "axios";

const categoryApi = {
  getAllCategories: async () => {
    const rootEndpoint = "categories";
    const endpoint = `/${rootEndpoint}`;
    try {
      const response = await get(endpoint, {}, {});
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        return error.response;
      }
      return null;
    }
  },
};

export default categoryApi;
