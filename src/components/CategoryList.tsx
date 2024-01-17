import { CategoryType } from "@/global/type";
import Flexbox from "./FlexBox";

const CategoryList = ({
  listCategory,
  handleFilterProduct,
}: {
  listCategory: CategoryType[];
  handleFilterProduct: (categoryId: string) => Promise<void>;
}) => {
  return (
    <Flexbox $flexDirection="column" $gap="20">
      <div
        className="item"
        onClick={() => {
          handleFilterProduct("");
        }}
      >
        All
      </div>
      {listCategory?.map((el) => (
        <div
          className="item"
          key={el.id}
          onClick={() => {
            handleFilterProduct(el.id.toString());
          }}
        >
          {el.name}
        </div>
      ))}
    </Flexbox>
  );
};

export default CategoryList;
