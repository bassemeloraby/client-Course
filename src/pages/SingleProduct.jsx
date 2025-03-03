import { useLoaderData, Link, useNavigate } from "react-router-dom";

import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/products";

// eslint-disable-next-line react-refresh/only-export-components
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

  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      const response = await customFetch.delete(`${url}/${product._id}`);
      console.log(response);
      toast.success("Product deleted successfully!");
      return navigate("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message;
      toast.error(errorMessage);
      return null;
    }
  };

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
      <section>
        <button onClick={deleteHandler} className="btn btn-primary capitalize">
          delete
        </button>
        <Link
          to={`/update-product/${product._id}`}
          className="btn btn-success capitalize ms-1"
        >
          edit
        </Link>
      </section>

      {/*product */}
      <div>
        <h1 className="capitalize text-3xl font-bold">{tradeName}</h1>
        <h4 className="text-xl text-content font-bold mt-2">{price}</h4>
      </div>
    </section>
  );
};

export default SingleProduct;
