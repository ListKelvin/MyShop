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
import productApi from "@/hooks/api/useProductApi";
interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
  const data = useLoaderData() as {
    response: CategoryType[];
    response2: ProductType[];
  };
  const [currentData, setCurrentData] = useState<ProductType[]>(data.response2);
  // const [selectCategory, setSelectCategory] = useState("");
  console.log("data: ", data);

  const PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const count = calculateTotalPages({
    totalItems: currentData.length,
    perPage: PER_PAGE,
  });

  const _DATA = usePagination(currentData, PER_PAGE);
  const handleChange = (_e: React.ChangeEvent<unknown>, pageNumber: number) => {
    setPage(pageNumber);
    _DATA.jump(pageNumber);
  };
  const handleFilterProduct = async (categoryId: string) => {
    if (categoryId !== "") {
      const filterProducts = await productApi.getAllProductsByCate(categoryId);
      setCurrentData(filterProducts);
    } else {
      setCurrentData(data.response2);
    }
  };
  // select thay đổi call api
  // get list new product by cate -> state chage
  // khi nhấn all set lại data ban đầu
  // useEffect(() => {}, [currentData]);
  return (
    <MaxWidthWrapper>
      <Flexbox $justifyContent="center">
        <div className="categories">
          <h1>Category</h1>
          <CategoryList
            listCategory={data.response}
            handleFilterProduct={handleFilterProduct}
          />
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
              <strong>{_DATA.currentData().length}</strong>
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
