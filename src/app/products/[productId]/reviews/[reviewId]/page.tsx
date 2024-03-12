import { notFound } from "next/navigation"

export default function ReviewDetail({params}: {
  params: {
    productId: string,
    reviewId: string
  }
}){
  if(parseInt(params.reviewId) > 100){
    notFound();
  }
  return (
    <h1>Review Detail {params.reviewId} page of {params.productId} page</h1>
  )
} 