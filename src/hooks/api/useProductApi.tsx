import { get } from "@/utils/apiCaller";
import axios from "axios";

const productApi = {
  getAllProducts: async () => {
    const endpoint = `/products`;
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
  getAllProductsByCate: async (categoryId: string) => {
    const endpoint = `/products/category/${categoryId}`;
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
  getProductById: async (productId: string) => {
    const endpoint = `/products/id/${productId}`;
    try {
      const response = await get(endpoint, {}, {});
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        return error.response;
      }
      return null;
    }
  },
};

export default productApi;
