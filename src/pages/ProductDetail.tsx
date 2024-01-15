import { MaxWidthWrapper } from "@/global/styles";
import MockBg from "@/assets/picture/222.jpg";
import Flexbox from "@/components/FlexBox";
import ProductList from "@/components/ProductList";
import { Rating } from "@mui/material";
const ProductDetails = () => {
  return (
    <MaxWidthWrapper>
      <div className="productInfo">
        <div className="previewImg flex-1">
          <img src={MockBg} alt="" className="picture " />
        </div>
        <div className="productContent flex-2">
          <h1>Vegetable's Package</h1>
          <div className="rate">
            <Rating name="read-only" value={3} readOnly />
            <span className="views">(18 views)</span>
          </div>
          <div className="price">$50.00</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            placeat molestias quam laudantium culpa sapiente sunt, nihil eos
            vero. Perspiciatis dignissimos ut, blanditiis voluptate odit nihil
            iure officiis officia impedit?
          </div>

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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis
          dolore consequatur. Corporis adipisci pariatur id quis delectus vitae
          nesciunt error aut? Modi ut voluptatum rerum earum laudantium
          voluptate quo!
        </div>
      </div>

      <div className="related">
        <h1 className="relatedTitle">Related Product</h1>
        <ProductList />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetails;
