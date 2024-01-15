import { FC, useState } from "react";
import { MaxWidthWrapper } from "@/global/styles";
import CategoryList from "@/components/CategoryList";
import Flexbox from "@/components/FlexBox";
import { calculateTotalPages } from "@/utils/utils";
import ProductList from "@/components/ProductList";
import { useLoaderData } from "react-router-dom";
import usePagination from "@/hooks/usePagination";
import { Pagination } from "@mui/material";
import { CategoryType, ProductType } from "@/global/type";
interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
  const data = useLoaderData() as {
    response: CategoryType[];
    response2: ProductType[];
  };
  console.log("data: ", data);

  const PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const count = calculateTotalPages({
    totalItems: data.response2.length,
    perPage: PER_PAGE,
  });

  const _DATA = usePagination(data.response2, PER_PAGE);
  const handleChange = (_e: React.ChangeEvent<unknown>, pageNumber: number) => {
    setPage(pageNumber);
    _DATA.jump(pageNumber);
  };

  return (
    <MaxWidthWrapper>
      <Flexbox $justifyContent="center">
        <div className="categories">
          <h1>Category</h1>
          <CategoryList listCategory={data.response} />
        </div>

        <div className="productContainer">
          <Flexbox $alignItems="center" $justifyContent="space-between">
            <div
              className=""
              style={{
                padding: "1rem 2rem",
                display: "flex",
                flex: 1,
                justifySelf: "center",
                gap: "10px",
              }}
            >
              Sort By: default
            </div>
            <div
              className=""
              style={{
                padding: "1rem 2rem",
                display: "flex",
                flex: 1.5,
                justifySelf: "center",
                gap: "10px",
              }}
            >
              <strong>16</strong>
              Products found
            </div>
          </Flexbox>
          <ProductList listProducts={_DATA.currentData()} />
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </Flexbox>
    </MaxWidthWrapper>
  );
};

export default ShopPage;
