import { CategoryType } from "@/global/type";
import Flexbox from "./FlexBox";

const CategoryList = ({ listCategory }: { listCategory: CategoryType[] }) => {
  return (
    <Flexbox $flexDirection="column" $gap="20">
      {listCategory?.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </Flexbox>
  );
};

export default CategoryList;
