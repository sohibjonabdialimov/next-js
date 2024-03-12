import { Metadata } from "next";

type ProductProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({params}: ProductProps): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}
export default function Products({ params }: ProductProps) {
  return <h1>Product page {params.productId}</h1>;
}
