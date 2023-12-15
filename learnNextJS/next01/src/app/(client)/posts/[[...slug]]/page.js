function Posts({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>News</h1>
    </div>
  );
}

export default Posts;
