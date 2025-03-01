import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/products";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post(url, data);
    console.log(response);
    toast.success("New product is added successfully");
    return redirect("/");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

const ProductCreate = () => {
  return (
    <section className="h-screen grid ">
      <Form
        method="post"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold capitalize">create</h4>
        <FormInput type="text" label="Trade Name" name="tradeName" />
        <FormInput type="text" label="Price" name="price" />
        <div className="mt-4">
          <SubmitBtn text="create" />
        </div>
      </Form>
    </section>
  );
};

export default ProductCreate;
