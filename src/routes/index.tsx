import { RouteObject, createBrowserRouter } from "react-router-dom";
import ShopPage from "@/pages";
import ProductDetails from "@/pages/ProductDetail";
import { GetAllCategory } from "./loader";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <ShopPage />,
    loader: GetAllCategory,
    errorElement: <div>Something wrong</div>,
  },
  {
    path: "/:id",
    element: <ProductDetails />,
    errorElement: <div>Something wrong</div>,
  },
  {
    path: "*",
    element: <div>Something wrong</div>,
  },
];
const router = createBrowserRouter(routes);
export default router;
