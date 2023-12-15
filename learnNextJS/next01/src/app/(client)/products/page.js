import ProductList from "./components/ProductList";
import Form from "./components/Form";
export const metadata = {
  title: "Product",
};

function Products({ searchParams: { status, query } }) {
  return (
    <div>
      {/* <ProductList /> */}
      <h2>Status: {status}</h2>
      <h2>Query: {query}</h2>
      <Form />
    </div>
  );
}

export default Products;
