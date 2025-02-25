import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { _id, tradeName, price } = product;
        return (
          <Link
            key={_id}
            to={`/products/${_id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{tradeName}</h3>
              <h4 className="capitalize text-md text-content">{price}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
