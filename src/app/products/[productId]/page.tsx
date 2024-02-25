export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product page {params.productId}</h1>;
}
