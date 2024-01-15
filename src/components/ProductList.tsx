import { ProductType } from "@/global/type";
import Product from "./Product";

const ProductList = ({ listProducts }: { listProducts: ProductType[] }) => {
  return (
    <div className="products">
      {listProducts?.map((el) => {
        return <Product key={el.id} product={el} />;
      })}
    </div>
  );
};

export default ProductList;
