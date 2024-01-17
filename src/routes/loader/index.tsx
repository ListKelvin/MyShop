import productApi from "@/hooks/api/useProductApi";
import categoryApi from "../../hooks/api/useCategoryApi";
import { LoaderFunctionArgs } from "react-router-dom";
export async function GetAllCategory() {
  const response = await categoryApi.getAllCategories();
  const response2 = await productApi.getAllProducts();
  return { response2, response };
}

export async function GetProductById({ params }: LoaderFunctionArgs) {
  const res = await productApi.getProductById(params.id?.toString());
  const res2 = await productApi.getAllProductsByCate(res.categoryId);

  return { res, res2 };
}
