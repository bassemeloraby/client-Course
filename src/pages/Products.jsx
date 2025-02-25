import { ProductsList } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  console.log(products);
  return { products };
};
const Products = () => {
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default Products;
