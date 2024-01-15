// import { LoaderFunctionArgs } from "react-router-dom";
import productApi from "@/hooks/api/useProductApi";
import categoryApi from "../../hooks/api/useCategoryApi";

export async function GetAllCategory() {
  const response = await categoryApi.getAllCategories();
  const response2 = await productApi.getAllProducts();
  return { response2, response };
}
