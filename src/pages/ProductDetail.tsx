import { MaxWidthWrapper } from "@/global/styles";

import Flexbox from "@/components/FlexBox";
import ProductList from "@/components/ProductList";
import { Rating } from "@mui/material";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { ProductType } from "@/global/type";
import { formatPrice } from "@/utils/utils";
import { useState } from "react";
const ProductDetails = () => {
  const data = useLoaderData() as { res: ProductType; res2: ProductType[] };
  console.log("data", data);
  const [imageSrc, setImageSrc] = useState(data.res.image);
  const errorImageSrc =
    "https://static.duong.id.vn/images/no-product-image-400x400.png";

  const handleImageError = () => {
    setImageSrc(errorImageSrc);
  };
  return (
    <MaxWidthWrapper>
      <ScrollRestoration />

      <div className="productInfo">
        <div className="previewImg flex-1">
          <img
            src={imageSrc}
            alt=""
            className="picture "
            onError={handleImageError}
          />
        </div>
        <div className="productContent flex-2">
          <h1>{data.res.name}</h1>
          <div className="rate">
            <Rating name="read-only" value={3} readOnly />
            <span className="views">(18 views)</span>
          </div>
          <div className="price">{formatPrice(data.res.price)}</div>
          <div className="description">{data.res.description}</div>

          <Flexbox $alignItems="center" $gap="10" $justifyContent="start">
            <div className="btnGroup">
              <div className="btnAction">-</div>
              <input
                title="number"
                type="number"
                className="numberProduct"
                value={0}
              />
              <div className="btnAction">+</div>
            </div>
            <button type="button">ADD TO CART</button>
            <div className="btn-favorite">
              <i className="fa-regular fa-heart"></i>
            </div>
          </Flexbox>
        </div>
      </div>
      <div className="description">
        <Flexbox $alignItems="center" $gap="50">
          <div style={{ width: "100%" }}>
            <hr />
          </div>
          <strong>Description</strong>
          <strong>Reviews</strong>
          <div style={{ width: "100%" }}>
            <hr />
          </div>
        </Flexbox>
        <p className="title">Product Information</p>
        <div>{data.res.description}</div>
      </div>

      <div className="related">
        <h1 className="relatedTitle">Related Product</h1>
        <ProductList listProducts={data.res2} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetails;
