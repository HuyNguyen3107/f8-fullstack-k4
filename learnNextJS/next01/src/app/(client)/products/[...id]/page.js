function ProductDetail({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1>Chi tiet san pham</h1>
      <h2>Chuyen muc: {id[0]}</h2>
      <h2>San pham: {id[1]}</h2>
    </div>
  );
}

export default ProductDetail;
