import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories, categoriesRecordsCleanUp } from "@store/categories/categoriesSlice";
import { Loading } from "@components/feedback";
import { TCategory } from "@customTypes/category";
import GridList from "@components/common/GridList/GridList";
import Category from "@components/eCommrce/Category/Category";
import { Heading } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
    return () => {
      dispatch(categoriesRecordsCleanUp())
    }
  }, [dispatch]);

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