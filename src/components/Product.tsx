import { ProductType } from "@/global/type";
import { formatPrice } from "@/utils/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
const Product = ({ product }: { product: ProductType }) => {
  const format_price = formatPrice(product.price);
  const [imageSrc, setImageSrc] = useState(product.image);
  const errorImageSrc =
    "https://static.duong.id.vn/images/no-product-image-400x400.png";

  const handleImageError = () => {
    setImageSrc(errorImageSrc);
  };
  return (
    <Link to={`/${product.id}`} className="product">
      <div className="">
        <img
          src={imageSrc}
          onError={handleImageError}
          alt=""
          className="picture"
        />
      </div>
      <p>{product.name}</p>
      <strong>{format_price}</strong>
    </Link>
  );
};

export default Product;
