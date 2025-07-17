import { Loading } from "@components/feedback";
import { TCategory } from "@types";
import GridList from "@components/common/GridList/GridList";
import Category from "@components/eCommrce/Category/Category";
import { Heading } from "@components/common";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
      <Heading title="Categories"/>
      <Loading status={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;