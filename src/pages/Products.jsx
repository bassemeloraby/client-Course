import { toast } from "react-toastify";
import { ProductsList } from "../components";
import { customFetch } from "../utils";

const url = "/products";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  if (products.length === 0) {
    toast.error("No products found!");
  } else {
    toast.success("Products loaded successfully!");
    console.log(products);
    return { products };
  }
};
const Products = () => {
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default Products;
