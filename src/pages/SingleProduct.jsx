import { useLoaderData, Link } from "react-router-dom";

import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/products";

export const loader = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const response = await customFetch(`${url}/${id}`);
  const product = response.data;
  
  if (!product) {
    toast.error("No product found!");
  } else {
    toast.success("Single Product is loaded !");
    console.log(product);
    return { product };
  }
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { tradeName, price } = product;

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/*product */}
      <div>
        <h1 className="capitalize text-3xl font-bold">{tradeName}</h1>
        <h4 className="text-xl text-content font-bold mt-2">{price}</h4>
      </div>
    </section>
  );
};

export default SingleProduct;
