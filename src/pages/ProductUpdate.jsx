import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const url = "/products";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await customFetch(`${url}/${id}`);
    const product = response.data;
    if (!product) {
      toast.error("No product found!");
      return redirect("/products"); // Redirect to a safe page
    }

    toast.success("Single Product is loaded!");
    return { product };
  } catch (error) {
    console.log(error);
    toast.error("Failed to load product details.");
    return redirect("/products"); // Redirect to a safe page
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.put(`${url}/${params.id}`, data, {
      headers: {
        "Content-Type": "application/json", // Use JSON for non-file data
      },
    });
    toast.success("Product updated successfully!");
    return redirect(`/products/${params.id}`);
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials.";
    toast.error(errorMessage);
    return null;
  }
};

const ProductUpdate = () => {
  const { product } = useLoaderData();
  const { tradeName, price } = product;

  const userRole = useSelector((state) => state.auth.user?.userRole);

  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "admin") {
      navigate("/");
    }
  }, [navigate, userRole]);

  return (
    <section className="h-screen grid items-start">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        {" "}
        <h4 className="text-center text-3xl font-bold capitalize">
          Update Product
        </h4>
        <FormInput
          type="text"
          label="Trade Name"
          name="tradeName"
          defaultValue={tradeName || ""}
          required
        />
        <FormInput
          type="number"
          label="Price"
          name="price"
          defaultValue={price || ""}
          required
        />
        <div className="mt-4">
          <SubmitBtn text="Update" />
        </div>
      </Form>
    </section>
  );
};

export default ProductUpdate;
