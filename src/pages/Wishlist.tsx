import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommrce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();
  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;