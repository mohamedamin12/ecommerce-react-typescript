import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommrce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, error, productPrefix, productsFullInfo } = useProducts();

  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} Products`} />
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;