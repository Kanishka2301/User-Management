async function ServerActionsExample() {
  async function fetchList() {
    "use server";
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data?.products;
  }
  const products = await fetchList();
  console.log(products);

  return (
    <div>
      <h1>Server actions example-server components</h1>
    </div>
  );
}

export default ServerActionsExample;
