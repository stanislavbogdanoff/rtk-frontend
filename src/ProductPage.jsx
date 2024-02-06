const ProductPage = () => {
  const { productId } = useParams();

  const {
    data: oneUserData,
    isLoading: oneUserIsLoading,
    isFetching: oneUserIsFetching,
  } = useGetUserQuery(productId);

  return <div>ProductPage</div>;
};

export default ProductPage;
